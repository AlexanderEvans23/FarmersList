const Customer = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }
  register(name, email, shippingAddress) {
    let customer = new Customer(name, email, shippingAddress);
    this.customers.push(customer);
  }
  login(email) {
    const indexCustomer = this.customers.map((c) => c.email).indexOf(email);
    if (indexCustomer === -1) return null;
    return this.customers[indexCustomer];
  }
}

module.exports = Auth;
