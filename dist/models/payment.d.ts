import { Currency } from "./currency";
declare class Payment {
    action: number;
    mode: string;
    contractNumber: string;
    currency: Currency;
    amount?: string | number;
    differedActionDate?: string;
    method?: string;
    softDescriptor?: string;
    cardBrand?: string;
    registrationToken?: string;
    cumulatedAmount?: string;
}
export { Payment };
