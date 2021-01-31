import * as moment from "moment-timezone";
/**
 * Payline helpers
 */
declare class PaylineUtils {
    static timezone: string;
    /**
     * Return the payline date format for this date
     */
    static getPaylineDateFormat(value: moment.Moment): string;
    /**
     * Return the payline date format for this date
     */
    static getPaylineNowDateFormat(): string;
    /**
     * Check result for success
     */
    static isSuccessful(response: any): boolean;
    /**
     * Check errors
     */
    static parseErrors(error: any): Promise<any>;
}
export { PaylineUtils };
