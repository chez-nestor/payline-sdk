import {BaseRequest} from "./base-request";
import {Order} from "../order";
import {Payment} from "../payment";
import {Card, CardType} from "../card";
import {Action} from "../action";
import {Mode} from "../mode";
import {Currency} from "../currency";

class VerifyEnrollmentRequest extends BaseRequest {
    public order: Order;
    public payment: Payment;
    public card: Card;
    public orderRef: string;

    constructor(orderRef: string) {
        super();
        this.payment = new Payment();
        this.payment.action = Action.AuthCapture.code;
        this.payment.mode = Mode.FULL;
        this.card = new Card();
        this.order = new Order();
        this.orderRef = orderRef;
    }

    public changeContractNumber(contractNumber: string, force: boolean = false): this {
        if (!this.payment.contractNumber || force) {
            this.payment.contractNumber = contractNumber;
        }
        return this;
    }

    public setPaymentDetails(action: Action, mode: Mode): this {
        this.payment.action = action.code;
        this.payment.mode = mode;
        return this;
    }

    public setAmount(amount: number): this {
        this.payment.amount = amount;
        this.payment.currency = Currency.EUR;
        this.order.amount = amount;
        this.order.currency = Currency.EUR;
        return this;
    }

    public setOrderDetail(ref: string, country: string, date: string): this {
        this.order.country = country;
        this.order.ref = ref;
        this.order.date = date;
        this.order.currency = Currency.EUR;
        return this;
    }

    public setCard(type: CardType, cardNumber: string, expirationDate: string, cvx: string): this {
        this.card.type = type;
        this.card.number = cardNumber;
        this.card.expirationDate = expirationDate;
        this.card.cvx = cvx;
        return this;
    }
}

export {VerifyEnrollmentRequest};
