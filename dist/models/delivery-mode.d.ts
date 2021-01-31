declare class DeliveryMode {
    readonly code: number;
    readonly description: string;
    readonly forTransaction3DSv2: boolean;
    readonly restCode: string;
    constructor(code: number, description: string, forTransaction3DSv2: boolean, restCode: string);
    static readonly ClickAndCollect: DeliveryMode;
    static readonly PickupPoint: DeliveryMode;
    static readonly Travel: DeliveryMode;
    static readonly Mail: DeliveryMode;
    static readonly DigitalGoods: DeliveryMode;
    static readonly BillegAddress: DeliveryMode;
    static readonly VerifiedAddress: DeliveryMode;
    static readonly NotBillingAddress: DeliveryMode;
    static readonly TravelAndEventTickets: DeliveryMode;
    static readonly Locker: DeliveryMode;
    static readonly Other: DeliveryMode;
}
export { DeliveryMode };
