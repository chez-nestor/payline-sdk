"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeliveryMode {
    constructor(code, description, forTransaction3DSv2, restCode) {
        this.forTransaction3DSv2 = false;
        this.code = code;
        this.description = description;
        this.forTransaction3DSv2 = forTransaction3DSv2;
        this.restCode = restCode;
    }
}
exports.DeliveryMode = DeliveryMode;
DeliveryMode.ClickAndCollect = new DeliveryMode(1, "Collect goods from the merchant", false, "CLICKANDCOLLECT");
DeliveryMode.PickupPoint = new DeliveryMode(2, "Use a network of third-party pick-up points (such as Kiala, Alveol, etc.)", false, "PICKUP_POINT");
DeliveryMode.Travel = new DeliveryMode(3, "Collect from an airport, a train station or a travel agent", false, "");
DeliveryMode.Mail = new DeliveryMode(4, "Mail (Colissimo, UPS, DHL, etc., or any private courier)", false, "MAIL");
DeliveryMode.DigitalGoods = new DeliveryMode(5, "Issuing an electronic ticket, downloads", false, "DIGITAL_GOOD");
DeliveryMode.BillegAddress = new DeliveryMode(6, "Ship to cardholder’s billing address", true, "BILLING_ADDRESS");
DeliveryMode.VerifiedAddress = new DeliveryMode(7, "Ship to another verified address on file with merchant", true, "VERIFIED_ADDRESS");
DeliveryMode.NotBillingAddress = new DeliveryMode(8, "Ship to address that is different than the cardholder’s billing address", true, "NOT_BILLING_ADDRESS");
DeliveryMode.TravelAndEventTickets = new DeliveryMode(9, "Travel and Event tickets, not shipped", true, "");
DeliveryMode.Locker = new DeliveryMode(10, "Locker delivery (or other automated pick-up)", true, "LOCKER");
DeliveryMode.Other = new DeliveryMode(999, "Other", true, "OTHER");
//# sourceMappingURL=delivery-mode.js.map