const { Country, Actividades } = require("../db");

async function nuevaActividad(req, res, next) {
  const { nombre, dificultad, duracion, temporada, countryID } = req.body;

  const findAct = await Actividades.findOne({ where: { name: nombre } });
  if (!findAct) {
    const addAct = await Actividades.create({
      name: nombre,
      dificultad: dificultad,
      duracion: duracion,
      temporada: temporada,
    });
  }
  const countryMatch = await Country.findAll({
    where: {
      ID: countryID,
    },
  });
  const resAct = await addAct.addCountries(countryMatch);
  res.send(resAct);
}
async function listarActividades(req, res) {
  const actividades = await Actividades.findAll();
  res.send(actividades);
}
module.exports = { nuevaActividad, listarActividades };
