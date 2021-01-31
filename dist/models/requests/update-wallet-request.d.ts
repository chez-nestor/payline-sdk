import { BaseRequest } from "./base-request";
import { Buyer } from "../buyer";
import { Owner } from "../owner";
import { Authentication3DS } from "../authentication3-d-s";
import { Card } from "../card";
import { Wallet } from "../wallet";
declare class UpdateWalletRequest extends BaseRequest {
    contractNumber: string;
    wallet: Partial<Wallet>;
    buyer?: Buyer;
    owner?: Owner;
    privateDataList?: {
        [key: string]: string;
    };
    authentication3DSecure?: Authentication3DS;
    media?: string;
    contractNumberWalletList?: any;
    cardInd?: string;
    constructor(card: Card);
    changeContractNumber(contractNumber: string, force?: boolean): this;
}
export { UpdateWalletRequest };
