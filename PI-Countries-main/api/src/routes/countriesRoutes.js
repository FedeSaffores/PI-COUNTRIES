const { Router } = require("express");
const {
  getAllCountries,
  getCountryById,
} = require("../Controllers/CountriesCountrollers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/:idPais", getCountryById);
router.use("/", getAllCountries);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
