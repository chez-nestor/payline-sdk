import { BaseRequest } from "./base-request";
import { Payment } from "../payment";
import { Currency } from "../currency";
import { OrderDetail } from "../order-detail";
declare class DoRefundRequest extends BaseRequest {
    transactionID: string;
    payment: Payment;
    comment?: string;
    sequenceNumber?: string;
    privateDataList?: {
        [key: string]: string;
    };
    media?: string;
    details?: OrderDetail;
    constructor(transactionId: string, payment?: Payment);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setPaymentAmount(amount: number, currency: Currency): this;
    setComment(comment: string): this;
    setDetails(details: OrderDetail): this;
}
export { DoRefundRequest };
