"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment-timezone");
/**
 * Payline helpers
 */
class PaylineUtils {
    /**
     * Return the payline date format for this date
     */
    static getPaylineDateFormat(value) {
        return value.format("DD/MM/YYYY HH:mm");
    }
    /**
     * Return the payline date format for this date
     */
    static getPaylineNowDateFormat() {
        return this.getPaylineDateFormat(moment.tz(PaylineUtils.timezone));
    }
    /**
     * Check result for success
     */
    static isSuccessful(response) {
        return response.result && ["02500", "00000"].indexOf(response.result.code) !== -1;
    }
    /**
     * Check errors
     */
    static parseErrors(error) {
        if (!error.response) {
            return Promise.reject(error);
        }
        const response = error.response;
        if (response.statusCode === 401) {
            return Promise.reject({ shortMessage: "Payline: Not authorized" });
        }
        return Promise.reject({ shortMessage: "Payline: Unknown error" });
    }
}
exports.PaylineUtils = PaylineUtils;
PaylineUtils.timezone = "Europe/Paris";
//# sourceMappingURL=payline-utils.js.map