import {BaseResponse} from "./base-response";

class DoWebPaymentResponse extends BaseResponse {
  public token: string;
  public redirectURL: string;
  public stepCode?: string;
  public reqCode?: string;
  public method?: string;
}

export {DoWebPaymentResponse};
