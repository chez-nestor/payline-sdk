import { BaseResponse } from "./base-response";
declare class DoWebPaymentResponse extends BaseResponse {
    token: string;
    redirectURL: string;
    stepCode?: string;
    reqCode?: string;
    method?: string;
}
export { DoWebPaymentResponse };
