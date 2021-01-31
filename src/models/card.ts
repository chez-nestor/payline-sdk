import {PaymentData} from "./payment-data";

enum CardType {
  CB = "CB",
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  MAESTRO = "MAESTRO",
  AMEX = "AMEX"
}

class Card {
  public encryptionKeyId?: string;
  public encryptedData?: string;
  public number?: string;
  public type: CardType;
  public expirationDate?: string;
  public cvx?: string;
  public ownerBirthdayDate?: string;
  public password?: string;
  public cardPresent?: string;
  public cardholder?: string;
  public token?: string;
  public paymentData?: PaymentData;
}

export {Card, CardType};
