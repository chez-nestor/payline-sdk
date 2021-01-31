import cryptoRandomString from "crypto-random-string";
import {Payline} from "../payline";
import {CreateWalletRequest, DoImmediateWalletPaymentRequest, DoScheduledWalletPaymentRequest, UpdateWalletRequest} from "../../models/requests";
import {CreateWalletResponse, DoImmediateWalletPaymentResponse, DoScheduledWalletPaymentResponse, UpdateWalletResponse} from "../../models/responses";

/**
 * Manage payline wallets
 */
class WalletManagement {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Update an existing wallet
   */
  public updateWallet(request: UpdateWalletRequest): Promise<UpdateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("updateWallet", request);
  }

  /**
   * Create a new wallet
   */
  public createWallet(request: CreateWalletRequest): Promise<CreateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("createWallet", request);
  }

  /**
   * Do immediate wallet payment
   */
  public doImmediateWalletPayment(request: DoImmediateWalletPaymentRequest): Promise<DoImmediateWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doImmediateWalletPayment", request);
  }

  /**
   * Do schedule wallet payment
   */
  public doScheduledWalletPayment(request: DoScheduledWalletPaymentRequest): Promise<DoScheduledWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    request.order.ref = request.order.ref + cryptoRandomString({length: 16, type: "base64"});
    return this.payline.execAndCatch("doScheduledWalletPayment", request);
  }

}

export {WalletManagement};
