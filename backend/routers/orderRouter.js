const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Order = require('../models/orderModel.js');
const { isAdmin, isAuth } = require('../utils.js');

const orderRouter = express.Router();
//List Order
module.exports = orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'name');
    res.send(orders);
  })
);
//Bestell Übersicht von usern
module.exports = orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

module.exports = orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Warenkorb ist leer!' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'Neue Bestellung aufgegeben.', order: createdOrder });
    }
  })
);

module.exports = orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Bestellung nicht gefunden!' });
    }
  })
);
//Nach dem bezahlen mit paypal, kunde will sehen ob seine bezahlung geklappt hat
module.exports = orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'Bestellung aufgegeben', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Bestellung nicht gefunden!' });
    }
  })
);
//Delete Order in Admin screen
module.exports = orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: 'Bestellung gelöscht!', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Bestellung nicht gefunden!' });
    }
  })
);
//Deliver Order
module.exports = orderRouter.put(
  '/:id/deliver',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.send({ message: 'Bestellung wurde gelöscht!', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Bestellung nicht gefunden!' });
    }
  })
);
