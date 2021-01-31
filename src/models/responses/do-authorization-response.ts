import {BaseResponse} from "./base-response";
import {Transaction} from "../transaction";
import {Authorization} from "../authorization";
import {CardOut} from "../card-out";
import {ExtendedCardType} from "../extended-card-type";

class DoAuthorizationResponse extends BaseResponse {
  public transaction: Transaction;
  public authorization: Authorization;
  public card: CardOut;
  public extendedCard: ExtendedCardType;
  public privateDataList?: { [key: string]: string };
  public contractNumber: string;
  public linkedTransactionId?: string;
  public resultContainer?: string;
}

export {DoAuthorizationResponse};
