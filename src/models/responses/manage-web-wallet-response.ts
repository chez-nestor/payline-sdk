import {BaseResponse} from "./base-response";

class ManageWebWalletResponse extends BaseResponse {
  public token: string;
  public redirectURL: string;
}

export {ManageWebWalletResponse};
