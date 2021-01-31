import {BaseRequest} from "./base-request";
import {Buyer} from "../buyer";
import {Owner} from "../owner";

class CreateWebWalletRequest extends BaseRequest {
  public contractNumber: string;
  public selectedContractList?: { selectedContract: string }[];
  public updatePersonalDetails?: string;
  public buyer: Buyer;
  public owner?: Owner;
  public languageCode?: string;
  public customPaymentPageCode?: string;
  public securityMode?: string;
  public returnURL: string;
  public cancelURL: string;
  public notificationURL?: string;
  public privateDataList?: { [key: string]: string }; // metadata
  public customPaymentTemplateURL: string;
  public contractNumberWalletList?: any;

  constructor() {
    super();
    this.buyer = new Buyer();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.contractNumber || force) {
      this.contractNumber = contractNumber;
      if (!this.selectedContractList || this.selectedContractList.length === 0) {
        this.selectedContractList = [{selectedContract: contractNumber}];
      }
    }
    return this;
  }

  public setSelectedContracts(contractsNumber: string[]): this {
    this.selectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }


  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setCallbackUrls(returnURL: string, cancelURL: string, notificationURL: string = null): this {
    this.returnURL = returnURL;
    this.cancelURL = cancelURL;
    this.notificationURL = notificationURL;
    return this;
  }

  public setCustomPageCode(code: string): this {
    this.customPaymentPageCode = code;
    return this;
  }
}

export {CreateWebWalletRequest};
