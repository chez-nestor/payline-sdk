"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buyer_1 = require("../buyer");
const base_request_1 = require("./base-request");
class ManageWebWalletRequest extends base_request_1.BaseRequest {
    constructor(walletId) {
        super();
        this.updatePersonalDetails = "0";
        this.buyer = new buyer_1.Buyer();
        this.buyer.walletId = walletId;
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
    allowPersonalDetailsUpdate(allow) {
        this.updatePersonalDetails = allow ? "1" : "0";
        return this;
    }
    setSelectedContracts(contractsNumber) {
        this.selectedContractList = (contractsNumber || []).map(selectedContract => ({ selectedContract }));
        return this;
    }
    setCustomPageCode(code) {
        this.customPaymentPageCode = code;
        return this;
    }
}
exports.ManageWebWalletRequest = ManageWebWalletRequest;
//# sourceMappingURL=manage-web-wallet-request.js.map