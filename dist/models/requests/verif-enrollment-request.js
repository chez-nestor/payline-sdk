"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const order_1 = require("../order");
const payment_1 = require("../payment");
const card_1 = require("../card");
const action_1 = require("../action");
const mode_1 = require("../mode");
const currency_1 = require("../currency");
class VerifyEnrollmentRequest extends base_request_1.BaseRequest {
    constructor(orderRef) {
        super();
        this.payment = new payment_1.Payment();
        this.payment.action = action_1.Action.AuthCapture.code;
        this.payment.mode = mode_1.Mode.FULL;
        this.card = new card_1.Card();
        this.order = new order_1.Order();
        this.orderRef = orderRef;
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
        }
        return this;
    }
    setPaymentDetails(action, mode) {
        this.payment.action = action.code;
        this.payment.mode = mode;
        return this;
    }
    setAmount(amount) {
        this.payment.amount = amount;
        this.payment.currency = currency_1.Currency.EUR;
        this.order.amount = amount;
        this.order.currency = currency_1.Currency.EUR;
        return this;
    }
    setOrderDetail(ref, country, date) {
        this.order.country = country;
        this.order.ref = ref;
        this.order.date = date;
        this.order.currency = currency_1.Currency.EUR;
        return this;
    }
    setCard(type, cardNumber, expirationDate, cvx) {
        this.card.type = type;
        this.card.number = cardNumber;
        this.card.expirationDate = expirationDate;
        this.card.cvx = cvx;
        return this;
    }
}
exports.VerifyEnrollmentRequest = VerifyEnrollmentRequest;
//# sourceMappingURL=verif-enrollment-request.js.map