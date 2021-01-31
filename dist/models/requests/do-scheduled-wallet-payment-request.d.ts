import { Mode } from "../mode";
import { Currency } from "../currency";
import { DeliveryMode } from "../delivery-mode";
import { Order } from "../order";
import { BaseRequest } from "./base-request";
import { Action } from "../action";
import { Payment } from "../payment";
declare class DoScheduledWalletPaymentRequest extends BaseRequest {
    payment: Payment;
    orderRef?: string;
    orderDate?: string;
    scheduledDate: string;
    walletId: string;
    cardInd?: string;
    order?: Order;
    privateDataList?: {
        [key: string]: string;
    };
    media?: string;
    subMerchant?: {};
    constructor(walletId: string);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setCurrency(currency: Currency): this;
    setAmount(amount: number): this;
    setPaymentDetails(action: Action, mode: Mode, differedActionDate?: string): this;
    setOrderDetails(deliveryMode: DeliveryMode, country: string, details?: any): this;
}
export { DoScheduledWalletPaymentRequest };
