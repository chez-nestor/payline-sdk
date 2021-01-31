import {Transaction} from "../transaction";
import {Authorization} from "../authorization";
import {BaseResponse} from "./base-response";

class DoImmediateWalletPaymentResponse extends BaseResponse {
  public transaction: Transaction;
  public authorization: Authorization;
}

export {DoImmediateWalletPaymentResponse};
