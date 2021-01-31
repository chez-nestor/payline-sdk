"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const wallet_1 = require("../wallet");
class CreateWalletRequest extends base_request_1.BaseRequest {
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
exports.CreateWalletRequest = CreateWalletRequest;
//# sourceMappingURL=create-wallet-request.js.map