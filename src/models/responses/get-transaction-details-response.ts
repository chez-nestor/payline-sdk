import {BaseResponse} from "./base-response";
import {ResultResponse} from "./result-response";
import {Transaction} from "../transaction";
import {Payment} from "../payment";
import {Authorization} from "../authorization";
import {Authentication3DS} from "../authentication3-d-s";
import {CardOut} from "../card-out";
import {ExtendedCardType} from "../extended-card-type";
import {Order} from "../order";
import {Buyer} from "../buyer";

class GetTransactionDetailsResponse extends BaseResponse {
  public result: ResultResponse;
  public transaction: Transaction;
  public payment: Payment;
  public authorization: Authorization;
  public order?: Order;
  public buyer?: Buyer;
  public privateDataList?: { [key: string]: string }; // metadata
  public card: CardOut;
  public extendedCard: ExtendedCardType;
  public associatedTransactionsList?: any;
  public statusHistoryList?: any;
  public media?: string;
  public customerMedia: any;
  public contractNumber: string;
  public paymentAdditionalList?: any;
  public bankAccountData?: any;
  public subMerchant?: {};
  public authentication3DSecure?: Authentication3DS;
  public pointOfSell?: any;
  public routingRule?: any;
}

export {GetTransactionDetailsResponse};
