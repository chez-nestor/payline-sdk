import { Payline } from "../payline";
import { DoRefundRequest } from "../../models/requests";
import { DoRefundResponse } from "../../models/responses";
/**
 * Manage payline payments
 */
declare class Management {
    private readonly payline;
    constructor(payline: Payline);
    /**
     * Execute a refund (can be partial)
     */
    doRefund(request: DoRefundRequest): Promise<DoRefundResponse>;
}
export { Management };
