import {BaseResponse} from "./base-response";
import {Transaction} from "../transaction";

class DoRefundResponse extends BaseResponse {
  public transaction: Transaction;
}

export {DoRefundResponse};
