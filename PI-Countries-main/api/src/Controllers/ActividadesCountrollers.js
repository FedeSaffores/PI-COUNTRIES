const { Country, Actividades } = require("../db");

async function nuevaActividad(req, res) {
  const { nombre, dificultad, duracion, temporada, countryID } = req.body;

  const findAct = await Actividades.findOne({
    where: {
      nombre: nombre,
    },
  });

  if (!findAct) {
    const addAct = await Actividades.create({
      nombre: nombre,
      dificultad: dificultad,
      duracion: duracion,
      temporada: temporada,
    });

    const countryMatch = await Country.findAll({
      where: {
        ID: countryID,
      },
    });

    const resAct = await addAct.addCountries(countryMatch);
    return res.send(resAct);
  }
  console.log(resAct);
  const countryMatch = await Country.findAll({
    where: {
      ID: countryID,
    },
  });
  const resAct = await findAct.addCountries(countryMatch);
  res.send(resAct);
}
async function listarActividades(req, res) {
  const actividades = await Actividades.findAll();
  res.send(actividades);
}
module.exports = { nuevaActividad, listarActividades };
