import {Mode} from "../mode";
import {Currency} from "../currency";
import {DeliveryMode} from "../delivery-mode";
import {Order} from "../order";
import {BaseRequest} from "./base-request";
import {PaylineUtils} from "../../services/payline-utils";
import {Action} from "../action";
import {Payment} from "../payment";

class DoScheduledWalletPaymentRequest extends BaseRequest {
  public payment: Payment;
  public orderRef?: string;
  public orderDate?: string;
  public scheduledDate: string;
  public walletId: string;
  public cardInd?: string;
  public order?: Order;

  // extras
  public privateDataList?: { [key: string]: string }; // metadata
  public media?: string;
  public subMerchant?: {};

  constructor(walletId: string) {
    super();
    this.walletId = walletId;
    this.payment = new Payment();
    this.order = new Order();
    this.order.ref = walletId;
    this.order.date = PaylineUtils.getPaylineNowDateFormat();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
    return this;
  }

  public setCurrency(currency: Currency): this {
    this.payment.currency = currency;
    this.order.currency = currency;
    return this;
  }

  public setAmount(amount: number): this {
    this.payment.amount = amount;
    this.order.amount = amount;
    return this;
  }

  public setPaymentDetails(action: Action, mode: Mode, differedActionDate?: string): this {
    this.payment.action = action.code;
    this.payment.mode = mode;
    if (differedActionDate) {
      this.payment.differedActionDate = differedActionDate;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: DeliveryMode, country: string, details: any = {}): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }
}

export {DoScheduledWalletPaymentRequest};
