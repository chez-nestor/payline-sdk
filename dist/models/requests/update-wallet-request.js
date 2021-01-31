"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const wallet_1 = require("../wallet");
class UpdateWalletRequest extends base_request_1.BaseRequest {
    constructor(card) {
        super();
        this.authentication3DSecure = {};
        this.wallet = new wallet_1.Wallet();
        this.wallet.card = card;
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.contractNumber || force) {
            this.contractNumber = contractNumber;
        }
        return this;
    }
}
exports.UpdateWalletRequest = UpdateWalletRequest;
//# sourceMappingURL=update-wallet-request.js.map