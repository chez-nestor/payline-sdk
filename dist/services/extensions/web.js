"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Web {
    constructor(payline) {
        this.payline = payline;
    }
    /**
     * Get web payment details
     */
    getWebPaymentDetails(request) {
        return this.payline.execAndCatch("getWebPaymentDetails", request);
    }
    /**
     * Get web payment details
     */
    doWebPayment(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("doWebPayment", request);
    }
    /**
     * Create web wallet
     */
    createWebWallet(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("createWebWallet", request);
    }
    /**
     * Manage a web wallet
     */
    manageWebWallet(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("manageWebWallet", request);
    }
}
exports.Web = Web;
//# sourceMappingURL=web.js.map