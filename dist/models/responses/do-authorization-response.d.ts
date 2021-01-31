import { BaseResponse } from "./base-response";
import { Transaction } from "../transaction";
import { Authorization } from "../authorization";
import { CardOut } from "../card-out";
import { ExtendedCardType } from "../extended-card-type";
declare class DoAuthorizationResponse extends BaseResponse {
    transaction: Transaction;
    authorization: Authorization;
    card: CardOut;
    extendedCard: ExtendedCardType;
    privateDataList?: {
        [key: string]: string;
    };
    contractNumber: string;
    linkedTransactionId?: string;
    resultContainer?: string;
}
export { DoAuthorizationResponse };
