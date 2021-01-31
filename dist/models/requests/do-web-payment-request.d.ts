import { Mode } from "../mode";
import { DeliveryMode } from "../delivery-mode";
import { BaseRequest } from "./base-request";
import { Order } from "../order";
import { Buyer } from "../buyer";
import { Owner } from "../owner";
import { ThreeDSInfo } from "../three-d-s-info";
import { Action } from "../action";
import { Payment } from "../payment";
import { OrderDetail } from "../order-detail";
declare class DoWebPaymentRequest extends BaseRequest {
    payment: Payment;
    returnURL: string;
    cancelURL: string;
    order: Order;
    notificationURL?: string;
    selectedContractList?: {
        selectedContract: string;
    }[];
    secondSelectedContractList?: {
        selectedContract: string;
    }[];
    privateDataList?: {
        [key: string]: string;
    };
    languageCode?: string;
    customPaymentPageCode?: string;
    buyer: Buyer;
    owner?: Owner;
    securityMode?: string;
    customPaymentTemplateURL: string;
    contractNumberWalletList?: any;
    merchantName?: string;
    subMerchant?: {};
    miscData?: string;
    asynchronousRetryTimeout?: string;
    threeDSInfo?: ThreeDSInfo;
    merchantScore?: string;
    constructor(orderRef: string);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setSelectedContracts(contractsNumber: string[]): this;
    setSecondSelectedContracts(contractsNumber: string[]): this;
    setCallbackUrls(returnURL: string, cancelURL: string, notificationURL?: string): this;
    setOrder(ref: string, country: string, date: string): this;
    setAmount(amount: number): this;
    setClientDetails(email: string, firstName: string, lastName: string): this;
    setWalletId(walletId: string): this;
    setPaymentDetails(action: Action, mode: Mode, differedActionDate?: string): this;
    setOrderDetails(deliveryMode: DeliveryMode, country?: string, details?: OrderDetail[]): this;
    setCustomPageCode(code: string): this;
}
export { DoWebPaymentRequest };
