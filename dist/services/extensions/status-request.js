"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manage payline status request
 */
class StatusRequest {
    constructor(payline) {
        this.payline = payline;
    }
    /**
     * Get a transaction from a transactionId
     */
    getTransactionDetailsRequest(request) {
        return this.payline.execAndCatch("getTransactionDetails", request);
    }
}
exports.StatusRequest = StatusRequest;
//# sourceMappingURL=status-request.js.map