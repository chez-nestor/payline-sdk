"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Payline direct payments Service
 */
class DirectPayment {
    constructor(payline) {
        this.payline = payline;
    }
    /**
     *  Call Authorization 3DS
     * @param request
     */
    verifyEnrollment(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("verifyEnrollment", request);
    }
    /**
     * Execute a refund (can be partial)
     */
    doAuthorization(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("doAuthorization", request);
    }
}
exports.DirectPayment = DirectPayment;
//# sourceMappingURL=direct-payment.js.map