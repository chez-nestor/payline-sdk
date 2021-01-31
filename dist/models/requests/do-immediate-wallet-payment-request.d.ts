import { Mode } from "../mode";
import { Currency } from "../currency";
import { DeliveryMode } from "../delivery-mode";
import { Authentication3DS } from "../authentication3-d-s";
import { BaseRequest } from "./base-request";
import { Action } from "../action";
import { Buyer } from "../buyer";
import { Order } from "../order";
import { Payment } from "../payment";
declare class DoImmediateWalletPaymentRequest extends BaseRequest {
    walletId: string;
    buyer: Buyer;
    payment: Payment;
    privateDataList?: {
        [key: string]: string;
    };
    authentication3DSecure?: Authentication3DS;
    subMerchant?: {};
    order: Order;
    constructor(walletId: string);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setCurrency(currency: Currency): this;
    setAmount(amount: number): this;
    setClientDetails(email: string, firstName: string, lastName: string): this;
    setPaymentDetails(action: Action, mode: Mode, differedActionDate?: string): this;
    setOrderDetails(deliveryMode: DeliveryMode, country: string, details?: any): this;
}
export { DoImmediateWalletPaymentRequest };
