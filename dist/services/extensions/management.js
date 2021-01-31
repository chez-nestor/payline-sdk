"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manage payline payments
 */
class Management {
    constructor(payline) {
        this.payline = payline;
    }
    /**
     * Execute a refund (can be partial)
     */
    doRefund(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("doRefund", request);
    }
}
exports.Management = Management;
//# sourceMappingURL=management.js.map