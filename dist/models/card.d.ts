import { PaymentData } from "./payment-data";
declare enum CardType {
    CB = "CB",
    VISA = "VISA",
    MASTERCARD = "MASTERCARD",
    MAESTRO = "MAESTRO",
    AMEX = "AMEX"
}
declare class Card {
    encryptionKeyId?: string;
    encryptedData?: string;
    number?: string;
    type: CardType;
    expirationDate?: string;
    cvx?: string;
    ownerBirthdayDate?: string;
    password?: string;
    cardPresent?: string;
    cardholder?: string;
    token?: string;
    paymentData?: PaymentData;
}
export { Card, CardType };
