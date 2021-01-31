export * from "./models/requests";
export * from "./models/responses";
export * from "./models";

import {Payline as Internal} from "./services/payline";
import {Web as InternalWeb} from "./services/extensions/web";
import {WalletManagement as InternalWalletManagement} from "./services/extensions/wallet-management";
import {Management as InternalPaymentManagement} from "./services/extensions/management";
import {DirectPayment as InternalDirectPayment} from "./services/extensions/direct-payment";
import {StatusRequest as InternalStatusRequest} from "./services/extensions/status-request";

export const Payline = Internal;
export type Payline = Internal;

export const Web = InternalWeb;
export type Web = InternalWeb;

export const WalletManagement = InternalWalletManagement;
export type WalletManagement = InternalWalletManagement;

export const PaymentManagement = InternalPaymentManagement;
export type PaymentManagement = InternalPaymentManagement;

export const DirectPayment = InternalDirectPayment;
export type DirectPayment = InternalDirectPayment;

export const StatusRequest = InternalStatusRequest;
export type StatusRequest = InternalStatusRequest;
