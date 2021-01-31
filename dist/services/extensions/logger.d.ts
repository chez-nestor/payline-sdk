interface Logger {
    log(...data: any): void;
}
/**
 * Default console logger
 */
declare class ConsoleLogger implements Logger {
    private readonly debugMode;
    constructor(debugMode: boolean);
    /**
     * Log data if enabled
     */
    log(...data: any): void;
}
export { Logger, ConsoleLogger };
