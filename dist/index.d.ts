export * from "./models/requests";
export * from "./models/responses";
export * from "./models";
import { Payline as Internal } from "./services/payline";
import { Web as InternalWeb } from "./services/extensions/web";
import { WalletManagement as InternalWalletManagement } from "./services/extensions/wallet-management";
import { Management as InternalPaymentManagement } from "./services/extensions/management";
import { DirectPayment as InternalDirectPayment } from "./services/extensions/direct-payment";
import { StatusRequest as InternalStatusRequest } from "./services/extensions/status-request";
export declare const Payline: typeof Internal;
export declare type Payline = Internal;
export declare const Web: typeof InternalWeb;
export declare type Web = InternalWeb;
export declare const WalletManagement: typeof InternalWalletManagement;
export declare type WalletManagement = InternalWalletManagement;
export declare const PaymentManagement: typeof InternalPaymentManagement;
export declare type PaymentManagement = InternalPaymentManagement;
export declare const DirectPayment: typeof InternalDirectPayment;
export declare type DirectPayment = InternalDirectPayment;
export declare const StatusRequest: typeof InternalStatusRequest;
export declare type StatusRequest = InternalStatusRequest;
