import {CreateWebWalletRequest, DoWebPaymentRequest, GetWebPaymentDetailsRequest, ManageWebWalletRequest} from "../../models/requests";
import {CreateWebWalletResponse, DoWebPaymentResponse, GetWebPaymentDetailsResponse, ManageWebWalletResponse} from "../../models/responses";
import {Payline} from "../payline";

class Web {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Get web payment details
   */
  public getWebPaymentDetails(request: GetWebPaymentDetailsRequest): Promise<GetWebPaymentDetailsResponse> {
    return this.payline.execAndCatch("getWebPaymentDetails", request);
  }

  /**
   * Get web payment details
   */
  public doWebPayment(request: DoWebPaymentRequest): Promise<DoWebPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doWebPayment", request);
  }

  /**
   * Create web wallet
   */
  public createWebWallet(request: CreateWebWalletRequest): Promise<CreateWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("createWebWallet", request);
  }

  /**
   * Manage a web wallet
   */
  public manageWebWallet(request: ManageWebWalletRequest): Promise<ManageWebWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("manageWebWallet", request);
  }

}

export {Web};
