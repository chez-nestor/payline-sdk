import { CreateWebWalletRequest, DoWebPaymentRequest, GetWebPaymentDetailsRequest, ManageWebWalletRequest } from "../../models/requests";
import { CreateWebWalletResponse, DoWebPaymentResponse, GetWebPaymentDetailsResponse, ManageWebWalletResponse } from "../../models/responses";
import { Payline } from "../payline";
declare class Web {
    private readonly payline;
    constructor(payline: Payline);
    /**
     * Get web payment details
     */
    getWebPaymentDetails(request: GetWebPaymentDetailsRequest): Promise<GetWebPaymentDetailsResponse>;
    /**
     * Get web payment details
     */
    doWebPayment(request: DoWebPaymentRequest): Promise<DoWebPaymentResponse>;
    /**
     * Create web wallet
     */
    createWebWallet(request: CreateWebWalletRequest): Promise<CreateWebWalletResponse>;
    /**
     * Manage a web wallet
     */
    manageWebWallet(request: ManageWebWalletRequest): Promise<ManageWebWalletResponse>;
}
export { Web };
