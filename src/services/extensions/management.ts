import {Payline} from "../payline";
import {DoRefundRequest} from "../../models/requests";
import {DoRefundResponse} from "../../models/responses";

/**
 * Manage payline payments
 */
class Management {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Execute a refund (can be partial)
   */
  public doRefund(request: DoRefundRequest): Promise<DoRefundResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doRefund", request);
  }

}

export {Management};
