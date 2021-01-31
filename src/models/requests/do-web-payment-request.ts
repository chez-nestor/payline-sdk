import {Mode} from "../mode";
import {Currency} from "../currency";
import {DeliveryMode} from "../delivery-mode";
import {BaseRequest} from "./base-request";
import {Order} from "../order";
import {Buyer} from "../buyer";
import {Owner} from "../owner";
import {ThreeDSInfo} from "../three-d-s-info";
import {PaylineUtils} from "../../services/payline-utils";
import {Action} from "../action";
import {Payment} from "../payment";
import {OrderDetail} from "../order-detail";

class DoWebPaymentRequest extends BaseRequest {
  public payment: Payment;
  public returnURL: string;
  public cancelURL: string;
  public order: Order;
  public notificationURL?: string;
  public selectedContractList?: { selectedContract: string }[];
  public secondSelectedContractList?: { selectedContract: string }[];
  public privateDataList?: { [key: string]: string } = {}; // metadata
  public languageCode?: string;
  public customPaymentPageCode?: string;
  public buyer: Buyer;
  public owner?: Owner;
  public securityMode?: string;
  public customPaymentTemplateURL: string;
  public contractNumberWalletList?: any;
  public merchantName?: string;
  public subMerchant?: {};
  public miscData?: string;
  public asynchronousRetryTimeout?: string;
  public threeDSInfo?: ThreeDSInfo;
  public merchantScore?: string;

  constructor(orderRef: string) {
    super();
    this.buyer = new Buyer();
    this.payment = new Payment();
    this.payment.action = Action.AuthCapture.code;
    this.payment.mode = Mode.FULL;
    this.securityMode = 'SSL';
    this.order = new Order();
    this.order.ref = orderRef;
    this.order.date = PaylineUtils.getPaylineNowDateFormat();
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.payment.contractNumber || force) {
      this.payment.contractNumber = contractNumber;
      if (!this.selectedContractList || this.selectedContractList.length === 0) {
        this.selectedContractList = [{selectedContract: contractNumber}];
      }
    }
    return this;
  }

  public setSelectedContracts(contractsNumber: string[]): this {
    this.selectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }

  public setSecondSelectedContracts(contractsNumber: string[]): this {
    this.secondSelectedContractList = (contractsNumber || []).map(selectedContract => ({selectedContract}));
    return this;
  }

  public setCallbackUrls(returnURL: string, cancelURL: string, notificationURL: string = null): this {
    this.returnURL = returnURL;
    this.cancelURL = cancelURL;
    this.notificationURL = notificationURL;
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

  public setClientDetails(email: string, firstName: string, lastName: string): this {
    this.buyer.email = email;
    this.buyer.firstName = firstName;
    this.buyer.lastName = lastName;
    return this;
  }

  public setWalletId(walletId: string): this {
    this.buyer.walletId = walletId;
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

  public setOrderDetails(deliveryMode: DeliveryMode, country: string = "fr", details: OrderDetail[] = null): this {
    this.order.deliveryMode = deliveryMode.code;
    this.order.country = country;
    this.order.details = details;
    return this;
  }

  public setCustomPageCode(code: string): this {
    this.customPaymentPageCode = code;
    return this;
  }
}

export {DoWebPaymentRequest};
