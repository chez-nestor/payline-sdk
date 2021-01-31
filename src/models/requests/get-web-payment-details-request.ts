import {BaseRequest} from "./base-request";

class GetWebPaymentDetailsRequest extends BaseRequest {
  public token: string;

  constructor(token: string) {
    super();
    this.token = token;
  }
}

export {GetWebPaymentDetailsRequest};
