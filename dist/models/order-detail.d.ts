declare class OrderDetail {
    ref?: string;
    price?: number;
    quantity?: number;
    comment?: string;
    category?: string;
    brand?: string;
    seller?: string;
    subcategory1?: string;
    subcategory2?: string;
    sellerType?: number;
    taxRate?: number;
    [attr: string]: any;
}
export { OrderDetail };
