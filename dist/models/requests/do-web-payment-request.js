"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("../mode");
const currency_1 = require("../currency");
const base_request_1 = require("./base-request");
const order_1 = require("../order");
const buyer_1 = require("../buyer");
const payline_utils_1 = require("../../services/payline-utils");
const action_1 = require("../action");
const payment_1 = require("../payment");
class DoWebPaymentRequest extends base_request_1.BaseRequest {
    constructor(orderRef) {
        super();
        this.privateDataList = {}; // metadata
        this.buyer = new buyer_1.Buyer();
        this.payment = new payment_1.Payment();
        this.payment.action = action_1.Action.AuthCapture.code;
        this.payment.mode = mode_1.Mode.FULL;
        this.securityMode = 'SSL';
        this.order = new order_1.Order();
        this.order.ref = orderRef;
        this.order.date = payline_utils_1.PaylineUtils.getPaylineNowDateFormat();
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
            if (!this.selectedContractList || this.selectedContractList.length === 0) {
                this.selectedContractList = [{ selectedContract: contractNumber }];
            }
        }
        return this;
    }
    setSelectedContracts(contractsNumber) {
        this.selectedContractList = (contractsNumber || []).map(selectedContract => ({ selectedContract }));
        return this;
    }
    setSecondSelectedContracts(contractsNumber) {
        this.secondSelectedContractList = (contractsNumber || []).map(selectedContract => ({ selectedContract }));
        return this;
    }
    setCallbackUrls(returnURL, cancelURL, notificationURL = null) {
        this.returnURL = returnURL;
        this.cancelURL = cancelURL;
        this.notificationURL = notificationURL;
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
    setClientDetails(email, firstName, lastName) {
        this.buyer.email = email;
        this.buyer.firstName = firstName;
        this.buyer.lastName = lastName;
        return this;
    }
    setWalletId(walletId) {
        this.buyer.walletId = walletId;
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
    setOrderDetails(deliveryMode, country = "fr", details = null) {
        this.order.deliveryMode = deliveryMode.code;
        this.order.country = country;
        this.order.details = details;
        return this;
    }
    setCustomPageCode(code) {
        this.customPaymentPageCode = code;
        return this;
    }
}
exports.DoWebPaymentRequest = DoWebPaymentRequest;
//# sourceMappingURL=do-web-payment-request.js.map