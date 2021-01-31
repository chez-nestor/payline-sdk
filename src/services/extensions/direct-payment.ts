import {Payline} from "../payline";
import {DoAuthorizationRequest, VerifyEnrollmentRequest} from "../../models/requests";
import {DoAuthorizationResponse, VerifyEnrollmentResponse} from "../../models/responses";

/**
 * Payline direct payments Service
 */
class DirectPayment {
  constructor(private readonly payline: Payline) {
  }

  /**
   *  Call Authorization 3DS
   * @param request
   */
  verifyEnrollment(request: VerifyEnrollmentRequest): Promise<VerifyEnrollmentResponse>  {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("verifyEnrollment", request);
  }

  /**
   * Execute a refund (can be partial)
   */
  public doAuthorization(request: DoAuthorizationRequest): Promise<DoAuthorizationResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doAuthorization", request);
  }
}

export {DirectPayment};
