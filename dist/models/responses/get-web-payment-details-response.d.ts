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
import { Wallet } from "../wallet";
declare class GetWebPaymentDetailsResponse extends BaseResponse {
    contractNumber: string;
    result: ResultResponse;
    transaction: Transaction;
    payment: Payment;
    authorization: Authorization;
    privateDataList?: {
        [key: string]: string;
    };
    paymentRecordId?: string;
    billingRecordList?: any;
    authentication3DSecure?: Authentication3DS;
    cardOut: CardOut;
    extendedCard: ExtendedCardType;
    order?: Order;
    paymentAdditionalList?: any;
    media?: string;
    numberOfAttempt?: string;
    wallet?: Wallet;
    contractNumberWalletList?: any;
    bankAccountData?: any;
    subMerchant?: {};
    buyer?: Buyer;
}
export { GetWebPaymentDetailsResponse };
