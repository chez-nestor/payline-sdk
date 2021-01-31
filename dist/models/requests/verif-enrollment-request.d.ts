import { BaseRequest } from "./base-request";
import { Order } from "../order";
import { Payment } from "../payment";
import { Card, CardType } from "../card";
import { Action } from "../action";
import { Mode } from "../mode";
declare class VerifyEnrollmentRequest extends BaseRequest {
    order: Order;
    payment: Payment;
    card: Card;
    orderRef: string;
    constructor(orderRef: string);
    changeContractNumber(contractNumber: string, force?: boolean): this;
    setPaymentDetails(action: Action, mode: Mode): this;
    setAmount(amount: number): this;
    setOrderDetail(ref: string, country: string, date: string): this;
    setCard(type: CardType, cardNumber: string, expirationDate: string, cvx: string): this;
}
export { VerifyEnrollmentRequest };
