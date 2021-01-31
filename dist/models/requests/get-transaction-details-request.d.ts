import { BaseRequest } from "./base-request";
declare class GetTransactionDetailsRequest extends BaseRequest {
    transactionId: string;
    constructor(transactionId: string);
}
export { GetTransactionDetailsRequest };
