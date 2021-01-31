import { BaseResponse } from "./base-response";
import { ResultResponse } from "./result-response";
import { Transaction } from "../transaction";
import { Payment } from "../payment";
import { Authorization } from "../authorization";
import { Authentication3DS } from "../authentication3-d-s";
import { CardOut } from "../card-out";
import { ExtendedCardType } from "../extended-card-type";
import { Order } from "../order";
import { Buyer } from "../buyer";
declare class GetTransactionDetailsResponse extends BaseResponse {
    result: ResultResponse;
    transaction: Transaction;
    payment: Payment;
    authorization: Authorization;
    order?: Order;
    buyer?: Buyer;
    privateDataList?: {
        [key: string]: string;
    };
    card: CardOut;
    extendedCard: ExtendedCardType;
    associatedTransactionsList?: any;
    statusHistoryList?: any;
    media?: string;
    customerMedia: any;
    contractNumber: string;
    paymentAdditionalList?: any;
    bankAccountData?: any;
    subMerchant?: {};
    authentication3DSecure?: Authentication3DS;
    pointOfSell?: any;
    routingRule?: any;
}
export { GetTransactionDetailsResponse };
