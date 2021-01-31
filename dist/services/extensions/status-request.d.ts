import { Payline } from "../payline";
import { GetTransactionDetailsResponse } from "../../models/responses";
import { GetTransactionDetailsRequest } from "../../models/requests";
/**
 * Manage payline status request
 */
declare class StatusRequest {
    private readonly payline;
    constructor(payline: Payline);
    /**
     * Get a transaction from a transactionId
     */
    getTransactionDetailsRequest(request: GetTransactionDetailsRequest): Promise<GetTransactionDetailsResponse>;
}
export { StatusRequest };
