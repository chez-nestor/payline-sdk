import {Currency} from "./currency";

class Payment {
  public action: number;
  public mode: string;
  public contractNumber: string;
  public currency: Currency;
  public amount?: string | number;
  public differedActionDate?: string;
  public method?: string;
  public softDescriptor?: string;
  public cardBrand?: string;
  public registrationToken?: string;
  public cumulatedAmount?: string;
}

export {Payment};
