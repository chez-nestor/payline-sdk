import {Payline} from "../payline";
import {GetTransactionDetailsResponse} from "../../models/responses";
import {GetTransactionDetailsRequest} from "../../models/requests";

/**
 * Manage payline status request
 */
class StatusRequest {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Get a transaction from a transactionId
   */
  public getTransactionDetailsRequest(request: GetTransactionDetailsRequest): Promise<GetTransactionDetailsResponse> {
    return this.payline.execAndCatch("getTransactionDetails", request);
  }

}

export {StatusRequest};
