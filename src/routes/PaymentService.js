/* eslint-disable require-jsdoc */
const mercadopagoSDK = require('mercadopago')

const mercadoSDKInit = async () => {
  try {
    await mercadopagoSDK.configure({
      access_token: 'TEST-2095263625448057-060417-f3896b4e4e02c5f0e7452765252b5ba6-183610839',
    })
    return true
  } catch (err) {
    return err
  }
}

mercadoSDKInit()

class PaymentService {
  mercadopago;

  constructor() {
    this.mercadopago = mercadopagoSDK
  }

  async createPaymentMercadoPago() {
    const preference = {
      items: [
        {
          title: 'Cookie',
          unit_price: 100,
          quantity: 1,
        },
      ],
      redirect_urls: {
        success: `http://localhost:3000/home`, // CAMBIAR POR EL FRONT DEPLOYADO
        pending: `http://localhost:3000/home`,
        failure: `http://localhost:3000/home`,
      },
      // notification_url: 'http://localhost:3001/mercadopago/feedback', // CAMBIAR POR UNA RUTA DE BACK DEPLOYADO
      auto_return: 'approved',
    }

    try {
      const response = await this.mercadopago.preferences.create(preference)
      console.log('Hasta aca todo flama')
      return response.body
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = {
  mercadoSDKInit,
  PaymentService
};