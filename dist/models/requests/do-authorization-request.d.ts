import { BaseRequest } from "./base-request";
import { Payment } from "../payment";
import { Card, CardType } from "../card";
import { Order } from "../order";
import { Buyer } from "../buyer";
import { Owner } from "../owner";
import { Authentication3DS } from "../authentication3-d-s";
import { BankAccountData } from "../bank-account-data";
import { SubMerchant } from "../sub-merchant";
import { DeliveryMode } from "../delivery-mode";
import { OrderDetail } from "../order-detail";
declare class DoAuthorizationRequest extends BaseRequest {
    transient?: string;
    payment: Payment;
    bankAccountData: BankAccountData;
    card: Card;
    order: Order;
    buyer?: Buyer;
    owner?: Owner;
    privateDataList?: {
        [key: string]: string;
    };
    authentication3DSecure?: Authentication3DS;
    media?: string;
    subMerchant?: SubMerchant;
    asynchronousRetryTimeout: string;
    linkedTransactionId: string;
    recurring?: string;
    constructor(payment?: Payment);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setOrderDetails(deliveryMode: DeliveryMode, country?: string, details?: OrderDetail[]): this;
    setOrder(ref: string, country: string, date: string): this;
    setAmount(amount: number): this;
    setWalletId(walletId: string): this;
    setClientDetails(email: string, firstName: string, lastName: string): this;
    setCard(type: CardType, cardNumber: string, expirationDate: string, cvx: string): this;
    setAuthentication3DS(md: string, pares: string): this;
}
export { DoAuthorizationRequest };
