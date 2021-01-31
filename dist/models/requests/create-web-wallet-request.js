"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_request_1 = require("./base-request");
const buyer_1 = require("../buyer");
class CreateWebWalletRequest extends base_request_1.BaseRequest {
    constructor() {
        super();
        this.buyer = new buyer_1.Buyer();
    }
    changeContractNumber(contractNumber, force = false) {
        if (!this.contractNumber || force) {
            this.contractNumber = contractNumber;
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
    setClientDetails(email, firstName, lastName) {
        this.buyer.email = email;
        this.buyer.firstName = firstName;
        this.buyer.lastName = lastName;
        return this;
    }
    setCallbackUrls(returnURL, cancelURL, notificationURL = null) {
        this.returnURL = returnURL;
        this.cancelURL = cancelURL;
        this.notificationURL = notificationURL;
        return this;
    }
    setCustomPageCode(code) {
        this.customPaymentPageCode = code;
        return this;
    }
}
exports.CreateWebWalletRequest = CreateWebWalletRequest;
//# sourceMappingURL=create-web-wallet-request.js.map