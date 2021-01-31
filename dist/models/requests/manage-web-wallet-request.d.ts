import { Buyer } from "../buyer";
import { Owner } from "../owner";
import { BaseRequest } from "./base-request";
declare class ManageWebWalletRequest extends BaseRequest {
    contractNumber: string;
    selectedContractList?: {
        selectedContract: string;
    }[];
    updatePersonalDetails?: string;
    buyer: Buyer;
    owner?: Owner;
    languageCode?: string;
    customPaymentPageCode?: string;
    securityMode?: string;
    returnURL: string;
    cancelURL: string;
    notificationURL?: string;
    privateDataList?: {
        [key: string]: string;
    };
    customPaymentTemplateURL: string;
    contractNumberWalletList?: any;
    merchantName?: string;
    threeDSInfo?: any;
    constructor(walletId: string);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setClientDetails(email: string, firstName: string, lastName: string): this;
    setCallbackUrls(returnURL: string, cancelURL: string, notificationURL?: string): this;
    allowPersonalDetailsUpdate(allow: boolean): this;
    setSelectedContracts(contractsNumber: string[]): this;
    setCustomPageCode(code: string): this;
}
export { ManageWebWalletRequest };
