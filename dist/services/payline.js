"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soap = require("soap");
const path = require("path");
const logger_1 = require("./extensions/logger");
const payline_utils_1 = require("./payline-utils");
const DEFAULT_HOMOLOGATION_WSDL = path.join(__dirname, "../config/wsdls/homologation/WebPaymentAPI.wsdl");
const DEFAULT_PRODUCTION_WSDL = path.join(__dirname, "../config/wsdls/production/WebPaymentAPI.wsdl");
/**
 * Payline service
 */
class Payline {
    constructor(merchantId, accessKey, contractNumber, options = {}, production = false, debugMode = false) {
        this.production = false;
        this.debugMode = false;
        this.merchantId = merchantId;
        this.accessKey = accessKey;
        this.contractNumber = contractNumber;
        this.options = options;
        this.production = production;
        this.debugMode = debugMode;
        this.logger = new logger_1.ConsoleLogger(debugMode);
        if (production) {
            this.wsdl = DEFAULT_PRODUCTION_WSDL;
        }
        else {
            this.wsdl = DEFAULT_HOMOLOGATION_WSDL;
        }
    }
    setWsdl(wsdl) {
        this.wsdl = wsdl;
    }
    getContractNumber() {
        return this.contractNumber;
    }
    /**
     * Get the soap client with this configuration
     */
    getClient() {
        if (this.clientInitialization) {
            return this.clientInitialization;
        }
        this.clientInitialization = new Promise((resolve, reject) => {
            soap.createClient(this.wsdl, this.options, (err, client) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(client);
                }
            });
        })
            .then((client) => {
            client.setSecurity(new soap.BasicAuthSecurity(this.merchantId, this.accessKey));
            client.on("request", (xml) => this.logger.log("request", xml));
            client.on("response", (xml) => this.logger.log("response", xml));
            return client;
        });
        return this.clientInitialization;
    }
    /**
     * Execute a soap method using a client and a payload.
     */
    execAndCatch(method, payload) {
        return this.getClient()
            .then(client => {
            return new Promise((resolve, reject) => {
                client[method](payload, (err, response) => err ? reject(err) : resolve(response));
            });
        })
            .then((response) => response)
            .catch(err => payline_utils_1.PaylineUtils.parseErrors(err));
    }
}
exports.Payline = Payline;
//# sourceMappingURL=payline.js.map