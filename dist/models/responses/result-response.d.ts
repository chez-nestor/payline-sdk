declare class ResultResponse {
    code: string;
    shortMessage?: string;
    longMessage?: string;
    partnerCode?: string;
    partnerCodeLabel?: string;
    constructor(code: string);
}
export { ResultResponse };
