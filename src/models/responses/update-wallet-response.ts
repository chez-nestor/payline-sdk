import {BaseResponse} from "./base-response";
import {CardOut} from "../card-out";
import {ExtendedCardType} from "../extended-card-type";

class UpdateWalletResponse extends BaseResponse {
  public card: CardOut;
  public extendedCard: ExtendedCardType;
  public contractNumberWalletList?: any;
}

export {UpdateWalletResponse};
