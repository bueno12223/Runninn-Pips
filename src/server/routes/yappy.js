import { Router } from "express"; // Asegúrate de importar el enrutador de express
import * as yappy from "yappy-node-back-sdk";
import dotenv from "dotenv";
dotenv.config();
const router = Router(); // Crea una instancia de un enrutador

const MERCHANT_ID = process.env.MERCHANT_ID;
const SECRET_KEY = process.env.SECRET_KEY;
const yappyClient = yappy.createClient(MERCHANT_ID, SECRET_KEY);

const yappyRoutes = async (app) => {
  app.get("/yappy", async (req, res) => {
    const subtotal = req.query.payment;
    const taxes = parseInt(subtotal) * 0.09;
    const total = parseInt(subtotal) + taxes;
    const payment = {
      total: total,
      subtotal: subtotal,
      shipping: 0.0,
      discount: 0.0,
      taxes: taxes.toFixed(2),
      orderId: "1234",
      successUrl: "https://runningtrader.com",
      failUrl: "https://runningtrader.com/",
      tel: "",
      domain: "https://runningtrader.com",
    };
    const response = await yappyClient.getPaymentUrl(payment);
    if (!response.success) {
      res.status(500).send(response);
    } else {
      res.send(response);
    }
  });
  app.get("/pagosbg", (req, res) => {
    const success = yappyClient.validateHash(req.query);
    if (success) {
      console.log(success,"el usuario pago")
      res.send(success,"el usuario pago")
    }
    console.log(success)
  });
};

export default yappyRoutes;
