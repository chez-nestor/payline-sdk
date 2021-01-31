"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Action {
    constructor(code, restCode) {
        this.code = code;
        this.restCode = restCode;
    }
}
exports.Action = Action;
// most used
Action.SimpleAuth = new Action(100, "AUTH"); // validation
Action.AuthCapture = new Action(101, "AUTH_CAPTURE"); // validation + payment
Action.Capture = new Action(201, "CAPTURE"); // payment
Action.AccountVerification = new Action(108, "ACCOUNT_VERIF");
Action.PermitTokenPan = new Action(109, "TOKEN_PAN");
Action.AuthRecurringFirst = new Action(110, "AUTH_COF_FIRST");
Action.AuthCaptureRecurringFirst = new Action(111, "AUTH_CAPTURE_COF_FIRST");
Action.AuthNoCVX = new Action(120, "AUTH_WITHOUT_CVX");
Action.AuthCaptureNoCVX = new Action(121, "AUTH_CAP_WITHOUT_CVX");
Action.AuthRecurring = new Action(122, "AUTH_COF");
Action.AuthCaptureRecurring = new Action(123, "AUTH_CAPTURE_COF");
Action.AuthInstallPayment = new Action(124, "AUTH_NX");
Action.AuthCaptureInstallPayment = new Action(125, "AUTH_CAPTURE_NX");
Action.AuthSplitShipment = new Action(126, "AUTHOR_SPLIT_SHIPMENT");
Action.AuthCaptureSplitShipment = new Action(127, "AUTHOR_CAPTURE_SPLIT_SHIPMENT");
Action.AuthOtherRecurring = new Action(128, "AUTHOR_OTHER_COF");
Action.AuthCaptureOther = new Action(129, "AUTHOR_CAPTURE_OTHER_COF");
Action.SEPACreditTransfert = new Action(150, "SCT");
Action.ReAuthorization = new Action(202, "REAUTHORIZATION");
Action.Debit = new Action(204, "DEBIT");
Action.Refund = new Action(421, "REFUND");
Action.Credit = new Action(422, "CREDIT");
//# sourceMappingURL=action.js.map