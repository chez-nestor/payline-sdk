import { OrderDetail } from "./order-detail";
declare class Order {
    ref: string;
    origin?: string;
    country?: string;
    taxes?: string;
    amount: string | number;
    currency: string | number;
    date: string;
    details?: OrderDetail[];
    deliveryTime?: string;
    deliveryMode?: number;
    deliveryExpectedDate?: string;
    deliveryExpectedDelay?: string;
    deliveryCharge?: string;
    discountAmount?: string;
    otaPackageType?: string;
    otaDestinationCountry?: string;
    bookingReference?: string;
    orderDetail?: string;
    orderExtended?: string;
    orderOTA?: string;
}
export { Order };
