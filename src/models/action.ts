class Action {
  public readonly code: number;
  public readonly restCode: string;

  constructor(code: number, restCode: string) {
    this.code = code;
    this.restCode = restCode;
  }

  // most used
  public static readonly SimpleAuth = new Action(100, "AUTH"); // validation
  public static readonly AuthCapture = new Action(101, "AUTH_CAPTURE"); // validation + payment
  public static readonly Capture = new Action(201, "CAPTURE"); // payment

  public static readonly AccountVerification = new Action(108, "ACCOUNT_VERIF");
  public static readonly PermitTokenPan = new Action(109, "TOKEN_PAN");
  public static readonly AuthRecurringFirst = new Action(110, "AUTH_COF_FIRST");
  public static readonly AuthCaptureRecurringFirst = new Action(111, "AUTH_CAPTURE_COF_FIRST");
  public static readonly AuthNoCVX = new Action(120, "AUTH_WITHOUT_CVX");
  public static readonly AuthCaptureNoCVX = new Action(121, "AUTH_CAP_WITHOUT_CVX");
  public static readonly AuthRecurring = new Action(122, "AUTH_COF");
  public static readonly AuthCaptureRecurring = new Action(123, "AUTH_CAPTURE_COF");
  public static readonly AuthInstallPayment = new Action(124, "AUTH_NX");
  public static readonly AuthCaptureInstallPayment = new Action(125, "AUTH_CAPTURE_NX");
  public static readonly AuthSplitShipment = new Action(126, "AUTHOR_SPLIT_SHIPMENT");
  public static readonly AuthCaptureSplitShipment = new Action(127, "AUTHOR_CAPTURE_SPLIT_SHIPMENT");
  public static readonly AuthOtherRecurring = new Action(128, "AUTHOR_OTHER_COF");
  public static readonly AuthCaptureOther = new Action(129, "AUTHOR_CAPTURE_OTHER_COF");
  public static readonly SEPACreditTransfert = new Action(150, "SCT");
  public static readonly ReAuthorization = new Action(202, "REAUTHORIZATION");
  public static readonly Debit = new Action(204, "DEBIT");
  public static readonly Refund = new Action(421, "REFUND");
  public static readonly Credit = new Action(422, "CREDIT");
}

export {Action};
