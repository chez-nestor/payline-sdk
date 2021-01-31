"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
class GetTransactionDetailsRequest extends base_request_1.BaseRequest {
    constructor(transactionId) {
        super();
        this.transactionId = transactionId;
    }
}
exports.GetTransactionDetailsRequest = GetTransactionDetailsRequest;
//# sourceMappingURL=get-transaction-details-request.js.map