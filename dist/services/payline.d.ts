import * as soap from "soap";
import { IOptions } from "soap/lib/types";
/**
 * Payline service
 */
declare class Payline {
    private readonly merchantId;
    private readonly accessKey;
    private readonly contractNumber;
    private wsdl;
    private options;
    private production;
    private debugMode;
    private logger;
    private clientInitialization;
    constructor(merchantId: any, accessKey: any, contractNumber: any, options?: IOptions, production?: boolean, debugMode?: boolean);
    setWsdl(wsdl: string): void;
    getContractNumber(): string;
    /**
     * Get the soap client with this configuration
     */
    getClient(): Promise<soap.Client>;
    /**
     * Execute a soap method using a client and a payload.
     */
    execAndCatch<T>(method: string, payload: any): Promise<T>;
}
export { Payline };
