import { BaseResponse } from "./base-response";
import { Authentication3DS } from "../authentication3-d-s";
declare class VerifyEnrollmentResponse extends BaseResponse {
    actionUrl?: string;
    actionMethod?: string;
    pareqFieldName?: string;
    pareqFieldValue?: string;
    termUrlName?: string;
    termUrlValue?: string;
    mdFieldName?: string;
    mdFieldValue?: string;
    mpiResult?: string;
    authentication3DSecure: Authentication3DS;
}
export { VerifyEnrollmentResponse };
