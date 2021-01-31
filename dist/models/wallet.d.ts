import { Card } from "./card";
declare class Wallet {
    card: Card;
    lastName?: string;
    firstName?: string;
    email?: string;
    shippingAddress?: any;
    comment?: string;
    default?: string;
    cardStatus?: string;
    cardBrand?: string;
}
export { Wallet };
