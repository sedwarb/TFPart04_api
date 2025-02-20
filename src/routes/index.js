// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Router } = require('express');
const router = Router();
const Product = require('./product.js');
const User = require('./user.js');
const Category = require('./category');
const Order = require('./order.js');
const mercadoPago = require('./mercadopago.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/product', Product);
router.use('/category', Category);
router.use('/user', User);
router.use('/order',Order);
router.use('/mercadopago',mercadoPago);
router.use('/', (req, res) => {
    res.send('APP is running');
})




module.exports = router;