import { BaseRequest } from "./base-request";
import { Buyer } from "../buyer";
import { Owner } from "../owner";
declare class CreateWebWalletRequest extends BaseRequest {
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
    constructor();
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setSelectedContracts(contractsNumber: string[]): this;
    setClientDetails(email: string, firstName: string, lastName: string): this;
    setCallbackUrls(returnURL: string, cancelURL: string, notificationURL?: string): this;
    setCustomPageCode(code: string): this;
}
export { CreateWebWalletRequest };
