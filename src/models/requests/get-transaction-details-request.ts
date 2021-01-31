import {BaseRequest} from "./base-request";

class GetTransactionDetailsRequest extends BaseRequest {
  public transactionId: string;

  constructor(transactionId: string) {
    super();
    this.transactionId = transactionId;
  }
}

export {GetTransactionDetailsRequest};
