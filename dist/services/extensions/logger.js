"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Default console logger
 */
class ConsoleLogger {
    constructor(debugMode) {
        this.debugMode = debugMode;
    }
    /**
     * Log data if enabled
     */
    log(...data) {
        if (this.debugMode) {
            console.dir(data, { showHidden: true, colors: true });
        }
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=logger.js.map