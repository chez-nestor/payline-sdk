import {Card} from "./card";

class Wallet {
  public card: Card;
  public lastName?: string;
  public firstName?: string;
  public email?: string;
  public shippingAddress?: any;
  public comment?: string;
  public default?: string;
  public cardStatus?: string;
  public cardBrand?: string;
}

export {Wallet};
