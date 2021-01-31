import {BaseResponse} from "./base-response";

class CreateWebWalletResponse extends BaseResponse {
  public token: string;
  public redirectURL: string;
}

export {CreateWebWalletResponse};
