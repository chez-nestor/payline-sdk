import {CardOut} from "../card-out";
import {ExtendedCardType} from "../extended-card-type";
import {BaseResponse} from "./base-response";

class CreateWalletResponse extends BaseResponse {
  public card: CardOut;
  public extendedCard: ExtendedCardType;
  public contractNumberWalletList?: any;
  public fraudResultDetails?: any;
}

export {CreateWalletResponse};
