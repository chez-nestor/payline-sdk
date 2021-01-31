import { Payline } from "../payline";
import { CreateWalletRequest, DoImmediateWalletPaymentRequest, DoScheduledWalletPaymentRequest, UpdateWalletRequest } from "../../models/requests";
import { CreateWalletResponse, DoImmediateWalletPaymentResponse, DoScheduledWalletPaymentResponse, UpdateWalletResponse } from "../../models/responses";
/**
 * Manage payline wallets
 */
declare class WalletManagement {
    private readonly payline;
    constructor(payline: Payline);
    /**
     * Update an existing wallet
     */
    updateWallet(request: UpdateWalletRequest): Promise<UpdateWalletResponse>;
    /**
     * Create a new wallet
     */
    createWallet(request: CreateWalletRequest): Promise<CreateWalletResponse>;
    /**
     * Do immediate wallet payment
     */
    doImmediateWalletPayment(request: DoImmediateWalletPaymentRequest): Promise<DoImmediateWalletPaymentResponse>;
    /**
     * Do schedule wallet payment
     */
    doScheduledWalletPayment(request: DoScheduledWalletPaymentRequest): Promise<DoScheduledWalletPaymentResponse>;
}
export { WalletManagement };
