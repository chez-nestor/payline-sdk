import { BaseResponse } from "./base-response";
import { CardOut } from "../card-out";
import { ExtendedCardType } from "../extended-card-type";
declare class UpdateWalletResponse extends BaseResponse {
    card: CardOut;
    extendedCard: ExtendedCardType;
    contractNumberWalletList?: any;
}
export { UpdateWalletResponse };
