import {BaseRequest} from "./base-request";
import {Payment} from "../payment";
import {Currency} from "../currency";
import {Action} from "../action";
import {Mode} from "../mode";
import {Card, CardType} from "../card";
import {Order} from "../order";
import {Buyer} from "../buyer";
import {Owner} from "../owner";
import {Authentication3DS} from "../authentication3-d-s";
import {BankAccountData} from "../bank-account-data";
import {SubMerchant} from "../sub-merchant";
import {DeliveryMode} from "../delivery-mode";
import {OrderDetail} from "../order-detail";

class DoAuthorizationRequest extends BaseRequest {
  public transient?: string;
  public payment: Payment;
  public bankAccountData: BankAccountData;
  public card: Card;
  public order: Order;
  public buyer?: Buyer;
  public owner?: Owner;
  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: Authentication3DS;
  public media?: string;
  public subMerchant?: SubMerchant;
  public asynchronousRetryTimeout: string;
  public linkedTransactionId: string;
  public recurring?: string;

  constructor(payment: Payment = null) {
    super();
    this.payment = payment ? payment : new Payment();
    this.payment.action = Action.AuthCapture.code;
    this.payment.mode = Mode.FULL;

    this.bankAccountData = new BankAccountData();
    this.card = new Card();
    this.order = new Order();
    this.authentication3DSecure = new Authentication3DS();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
    }
    return this;
  }

  public setOrderDetails(deliveryMode: DeliveryMode, country: string = "fr", details: OrderDetail[] = null): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }

  public setOrder(ref: string, country: string = "fr", date: string): this {
    this.order.country = country;
    this.order.ref = ref;
    this.order.date = date;
    this.order.currency = Currency.EUR;
    return this;
  }

  public setAmount(amount: number): this {
    this.payment.amount = amount;
    this.payment.currency = Currency.EUR;
    this.order.amount = amount;
    this.order.currency = Currency.EUR;
    return this;
  }

  public setWalletId(walletId: string): this {
    if (!this.buyer) {
      this.buyer = new Buyer();
    }
    this.buyer.walletId = walletId;
    return this;
  }

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    if (!this.buyer) {
      this.buyer = new Buyer();
    }

    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setCard(type: CardType, cardNumber: string, expirationDate: string, cvx: string): this {
    this.card.type = type;
    this.card.number = cardNumber;
    this.card.expirationDate = expirationDate;
    this.card.cvx = cvx;
    return this;
  }

  public setAuthentication3DS(md: string, pares: string): this {
    this.authentication3DSecure.md = md;
    this.authentication3DSecure.pares = pares;
    return this;
  }
}

export {DoAuthorizationRequest};
