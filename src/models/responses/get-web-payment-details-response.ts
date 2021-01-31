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
import {Wallet} from "../wallet";

class GetWebPaymentDetailsResponse extends BaseResponse {
  public contractNumber: string;
  public result: ResultResponse;
  public transaction: Transaction;
  public payment: Payment;
  public authorization: Authorization;

  public privateDataList?: { [key: string]: string }; // metadata
  public paymentRecordId?: string;
  public billingRecordList?: any;
  public authentication3DSecure?: Authentication3DS;
  public cardOut: CardOut;
  public extendedCard: ExtendedCardType;
  public order?: Order;
  public paymentAdditionalList?: any;
  public media?: string;
  public numberOfAttempt?: string;
  public wallet?: Wallet;
  public contractNumberWalletList?: any;
  public bankAccountData?: any;
  public subMerchant?: {};
  public buyer?: Buyer;
}

export {GetWebPaymentDetailsResponse};
