"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const payment_1 = require("../payment");
const currency_1 = require("../currency");
const action_1 = require("../action");
const mode_1 = require("../mode");
const card_1 = require("../card");
const order_1 = require("../order");
const buyer_1 = require("../buyer");
const authentication3_d_s_1 = require("../authentication3-d-s");
const bank_account_data_1 = require("../bank-account-data");
class DoAuthorizationRequest extends base_request_1.BaseRequest {
    constructor(payment = null) {
        super();
        this.payment = payment ? payment : new payment_1.Payment();
        this.payment.action = action_1.Action.AuthCapture.code;
        this.payment.mode = mode_1.Mode.FULL;
        this.bankAccountData = new bank_account_data_1.BankAccountData();
        this.card = new card_1.Card();
        this.order = new order_1.Order();
        this.authentication3DSecure = new authentication3_d_s_1.Authentication3DS();
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
        }
        return this;
    }
    setOrderDetails(deliveryMode, country = "fr", details = null) {
        this.order.deliveryMode = deliveryMode.code;
        this.order.country = country;
        this.order.details = details;
        return this;
    }
    setOrder(ref, country = "fr", date) {
        this.order.country = country;
        this.order.ref = ref;
        this.order.date = date;
        this.order.currency = currency_1.Currency.EUR;
        return this;
    }
    setAmount(amount) {
        this.payment.amount = amount;
        this.payment.currency = currency_1.Currency.EUR;
        this.order.amount = amount;
        this.order.currency = currency_1.Currency.EUR;
        return this;
    }
    setWalletId(walletId) {
        if (!this.buyer) {
            this.buyer = new buyer_1.Buyer();
        }
        this.buyer.walletId = walletId;
        return this;
    }
    setClientDetails(email, firstName, lastName) {
        if (!this.buyer) {
            this.buyer = new buyer_1.Buyer();
        }
        this.buyer.email = email;
        this.buyer.firstName = firstName;
        this.buyer.lastName = lastName;
        return this;
    }
    setCard(type, cardNumber, expirationDate, cvx) {
        this.card.type = type;
        this.card.number = cardNumber;
        this.card.expirationDate = expirationDate;
        this.card.cvx = cvx;
        return this;
    }
    setAuthentication3DS(md, pares) {
        this.authentication3DSecure.md = md;
        this.authentication3DSecure.pares = pares;
        return this;
    }
}
exports.DoAuthorizationRequest = DoAuthorizationRequest;
//# sourceMappingURL=do-authorization-request.js.map