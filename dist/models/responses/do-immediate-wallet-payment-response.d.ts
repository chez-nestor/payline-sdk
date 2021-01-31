import { Transaction } from "../transaction";
import { Authorization } from "../authorization";
import { BaseResponse } from "./base-response";
declare class DoImmediateWalletPaymentResponse extends BaseResponse {
    transaction: Transaction;
    authorization: Authorization;
}
export { DoImmediateWalletPaymentResponse };
