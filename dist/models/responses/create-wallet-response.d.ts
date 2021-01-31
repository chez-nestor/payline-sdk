import { CardOut } from "../card-out";
import { ExtendedCardType } from "../extended-card-type";
import { BaseResponse } from "./base-response";
declare class CreateWalletResponse extends BaseResponse {
    card: CardOut;
    extendedCard: ExtendedCardType;
    contractNumberWalletList?: any;
    fraudResultDetails?: any;
}
export { CreateWalletResponse };
