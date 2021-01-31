import {BaseRequest} from "./base-request";
import {Payment} from "../payment";
import {Currency} from "../currency";
import {OrderDetail} from "../order-detail";
import {Action} from "../action";
import {Mode} from "../mode";

class DoRefundRequest extends BaseRequest {
  public transactionID: string;
  public payment: Payment;
  public comment?: string;
  public sequenceNumber?: string;
  public privateDataList?: { [key: string]: string }; // metadata
  public media?: string;
  public details?: OrderDetail;

  constructor(transactionId: string, payment: Payment = null) {
    super();
    this.transactionID = transactionId;
    this.payment = payment ? payment : new Payment();
    this.payment.action = Action.Refund.code;
    this.payment.mode = Mode.FULL;
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
    return this;
  }

  public setPaymentAmount(amount: number, currency: Currency): this {
    this.payment.amount = amount;
    this.payment.currency = currency;
    return this;
  }

  public setComment(comment: string): this {
    this.comment = comment;
    return this;
  }

  public setDetails(details: OrderDetail): this {
    this.details = details;
    return this;
  }
}

export {DoRefundRequest};
