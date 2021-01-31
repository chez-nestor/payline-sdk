"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const payment_1 = require("../payment");
const action_1 = require("../action");
const mode_1 = require("../mode");
class DoRefundRequest extends base_request_1.BaseRequest {
    constructor(transactionId, payment = null) {
        super();
        this.transactionID = transactionId;
        this.payment = payment ? payment : new payment_1.Payment();
        this.payment.action = action_1.Action.Refund.code;
        this.payment.mode = mode_1.Mode.FULL;
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
        }
        return this;
    }
    setPaymentAmount(amount, currency) {
        this.payment.amount = amount;
        this.payment.currency = currency;
        return this;
    }
    setComment(comment) {
        this.comment = comment;
        return this;
    }
    setDetails(details) {
        this.details = details;
        return this;
    }
}
exports.DoRefundRequest = DoRefundRequest;
//# sourceMappingURL=do-refund-request.js.map