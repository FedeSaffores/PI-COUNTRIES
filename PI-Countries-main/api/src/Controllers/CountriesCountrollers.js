const { Country, Actividades } = require("../db");
const axios = require("axios");
const sequelize = require("sequelize");

async function getAllCountries(req, res, next) {
  try {
    let paises;
    const count = await Country.count();
    if (count === 0) {
      paises = (await axios.get("https://restcountries.com/v3/all")).data;
      //console.log(paises);
      // await es utilizado para esperar la promesa, solo funciona dentro de una async function
      Country.bulkCreate(
        paises.map((pais) => {
          return {
            ID: pais.cca3,
            nombre: pais.name.common,
            img: pais.flags[0],
            continente: pais.continents[0],
            capital: pais.capital ? pais.capital : "No tiene capital",
            subregion: pais.subregion ? pais.subregion : "No tiene subregion",
            area: pais.area,
            poblacion: pais.population,
          };
        })
      );
    }
    if (req.query.pais) {
      let pais = await Country.findAll({
        where: { name: { [sequelize.Op.iLike]: "%" + req.query.pais + "%" } },
      });

      if (pais.length === 0) {
        return res.status(404).json({
          error: `No se encontro ningún pais con el nombre ${req.query.pais}`,
        });
      }
      res.json(pais);
    } else {
      paises = await Country.findAll();
      res.json(paises);
    }
  } catch (err) {
    next(err);
  }
}
async function getCountryById(req, res, next) {
  try {
    let pais = await Country.findOne({
      where: { ID: req.params.id },
      include: Actividades,
    });
    res.json(pais);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  getAllCountries,
  getCountryById,
};
