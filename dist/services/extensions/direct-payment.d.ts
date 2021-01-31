import { Payline } from "../payline";
import { DoAuthorizationRequest, VerifyEnrollmentRequest } from "../../models/requests";
import { DoAuthorizationResponse, VerifyEnrollmentResponse } from "../../models/responses";
/**
 * Payline direct payments Service
 */
declare class DirectPayment {
    private readonly payline;
    constructor(payline: Payline);
    /**
     *  Call Authorization 3DS
     * @param request
     */
    verifyEnrollment(request: VerifyEnrollmentRequest): Promise<VerifyEnrollmentResponse>;
    /**
     * Execute a refund (can be partial)
     */
    doAuthorization(request: DoAuthorizationRequest): Promise<DoAuthorizationResponse>;
}
export { DirectPayment };
