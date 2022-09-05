const { Router } = require("express");
const countriesRoutes = require("./countriesRoutes");
const actividadesRoutes = require("./actividadesRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/countries", countriesRoutes);
router.use("/actividades", actividadesRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
