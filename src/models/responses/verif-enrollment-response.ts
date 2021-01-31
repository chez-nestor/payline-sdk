import {BaseResponse} from "./base-response";
import {Authentication3DS} from "../authentication3-d-s";

class VerifyEnrollmentResponse extends BaseResponse {
    public actionUrl?: string;
    public actionMethod?: string;
    public pareqFieldName?: string;
    public pareqFieldValue?: string;
    public termUrlName?: string;
    public termUrlValue?: string;
    public mdFieldName?: string;
    public mdFieldValue?: string;
    public mpiResult?: string;
    public authentication3DSecure: Authentication3DS;
}

export {VerifyEnrollmentResponse};
