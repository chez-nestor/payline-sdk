"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const buyer_1 = require("../buyer");
const order_1 = require("../order");
const payline_utils_1 = require("../../services/payline-utils");
const payment_1 = require("../payment");
class DoImmediateWalletPaymentRequest extends base_request_1.BaseRequest {
    constructor(walletId) {
        super();
        this.authentication3DSecure = {};
        this.walletId = walletId;
        this.buyer = new buyer_1.Buyer();
        this.buyer.walletId = walletId;
        this.payment = new payment_1.Payment();
        this.order = new order_1.Order();
        this.order.ref = walletId;
        this.order.date = payline_utils_1.PaylineUtils.getPaylineNowDateFormat();
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
        }
        return this;
    }
    setCurrency(currency) {
        this.payment.currency = currency;
        this.order.currency = currency;
        return this;
    }
    setAmount(amount) {
        this.payment.amount = amount;
        this.order.amount = amount;
        return this;
    }
    setClientDetails(email, firstName, lastName) {
        this.buyer.email = email;
        this.buyer.firstName = firstName;
        this.buyer.lastName = lastName;
        return this;
    }
    setPaymentDetails(action, mode, differedActionDate) {
        this.payment.action = action.code;
        this.payment.mode = mode;
        if (differedActionDate) {
            this.payment.differedActionDate = differedActionDate;
        }
        return this;
    }
    setOrderDetails(deliveryMode, country, details = {}) {
        this.order.deliveryMode = deliveryMode.code;
        this.order.country = country;
        this.order.details = details;
        return this;
    }
}
exports.DoImmediateWalletPaymentRequest = DoImmediateWalletPaymentRequest;
//# sourceMappingURL=do-immediate-wallet-payment-request.js.map