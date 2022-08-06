const { Router } = require("express");
const {
  nuevaActividad,
  listarActividades,
} = require("../Controllers/ActividadesCountrollers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/", listarActividades);
router.post("/", nuevaActividad);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
