import {Mode} from "../mode";
import {Currency} from "../currency";
import {DeliveryMode} from "../delivery-mode";
import {Authentication3DS} from "../authentication3-d-s";
import {BaseRequest} from "./base-request";
import {Action} from "../action";
import {Buyer} from "../buyer";
import {Order} from "../order";
import {PaylineUtils} from "../../services/payline-utils";
import {Payment} from "../payment";

class DoImmediateWalletPaymentRequest extends BaseRequest {
  public walletId: string;
  public buyer: Buyer;
  public payment: Payment;

  // extras
  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: Authentication3DS = {};
  public subMerchant?: {};

  public order: Order;

  constructor(walletId: string) {
    super();
    this.walletId = walletId;

    this.buyer = new Buyer();
    this.buyer.walletId = walletId;

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

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
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

export {DoImmediateWalletPaymentRequest};
