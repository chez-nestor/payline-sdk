import {BaseRequest} from "./base-request";
import {Buyer} from "../buyer";
import {Owner} from "../owner";
import {Authentication3DS} from "../authentication3-d-s";
import {Card} from "../card";
import {Wallet} from "../wallet";

class CreateWalletRequest extends BaseRequest {
  public contractNumber: string;
  public wallet: Partial<Wallet>;
  public buyer?: Buyer;
  public owner?: Owner;

  public privateDataList?: { [key: string]: string }; // metadata
  public authentication3DSecure?: Authentication3DS = {};
  public media?: string;
  public contractNumberWalletList?: any;

  constructor(card: Card) {
    super();
    this.wallet = new Wallet();
    this.wallet.card = card;
  }

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.contractNumber || force) {
      this.contractNumber = contractNumber;
    }
    return this;
  }
}

export {CreateWalletRequest};
