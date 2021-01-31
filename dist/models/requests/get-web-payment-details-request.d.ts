import { BaseRequest } from "./base-request";
declare class GetWebPaymentDetailsRequest extends BaseRequest {
    token: string;
    constructor(token: string);
}
export { GetWebPaymentDetailsRequest };
