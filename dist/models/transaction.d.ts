declare class Transaction {
    id: string;
    date: string;
    isDuplicated?: string;
    isPossibleFraud?: string;
    fraudResult?: string;
    fraudResultDetails?: any;
    explanation?: string;
    threeDSecure?: string;
    softDescriptor?: string;
    score?: string;
    scoring?: any;
    externalWalletType?: string;
    externalWalletContractNumber?: string;
    partnerAdditionalData?: string;
    avs?: any;
}
export { Transaction };
