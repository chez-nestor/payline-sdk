"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_random_string_1 = require("crypto-random-string");
/**
 * Manage payline wallets
 */
class WalletManagement {
    constructor(payline) {
        this.payline = payline;
    }
    /**
     * Update an existing wallet
     */
    updateWallet(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("updateWallet", request);
    }
    /**
     * Create a new wallet
     */
    createWallet(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("createWallet", request);
    }
    /**
     * Do immediate wallet payment
     */
    doImmediateWalletPayment(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        return this.payline.execAndCatch("doImmediateWalletPayment", request);
    }
    /**
     * Do schedule wallet payment
     */
    doScheduledWalletPayment(request) {
        request.changeContractNumber(this.payline.getContractNumber());
        request.order.ref = request.order.ref + crypto_random_string_1.default({ length: 16, type: "base64" });
        return this.payline.execAndCatch("doScheduledWalletPayment", request);
    }
}
exports.WalletManagement = WalletManagement;
//# sourceMappingURL=wallet-management.js.map