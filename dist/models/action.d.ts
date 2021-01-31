declare class Action {
    readonly code: number;
    readonly restCode: string;
    constructor(code: number, restCode: string);
    static readonly SimpleAuth: Action;
    static readonly AuthCapture: Action;
    static readonly Capture: Action;
    static readonly AccountVerification: Action;
    static readonly PermitTokenPan: Action;
    static readonly AuthRecurringFirst: Action;
    static readonly AuthCaptureRecurringFirst: Action;
    static readonly AuthNoCVX: Action;
    static readonly AuthCaptureNoCVX: Action;
    static readonly AuthRecurring: Action;
    static readonly AuthCaptureRecurring: Action;
    static readonly AuthInstallPayment: Action;
    static readonly AuthCaptureInstallPayment: Action;
    static readonly AuthSplitShipment: Action;
    static readonly AuthCaptureSplitShipment: Action;
    static readonly AuthOtherRecurring: Action;
    static readonly AuthCaptureOther: Action;
    static readonly SEPACreditTransfert: Action;
    static readonly ReAuthorization: Action;
    static readonly Debit: Action;
    static readonly Refund: Action;
    static readonly Credit: Action;
}
export { Action };
