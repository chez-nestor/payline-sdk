import { BaseResponse } from "./base-response";
import { Transaction } from "../transaction";
declare class DoRefundResponse extends BaseResponse {
    transaction: Transaction;
}
export { DoRefundResponse };
