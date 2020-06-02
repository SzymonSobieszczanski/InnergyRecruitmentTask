import {ServiceType, ServiceYear} from "../common/servicesData"

export interface IServicePrice {
    serviceType: ServiceType,
    serviceYear: ServiceYear,
    servicePrice: number
}

export interface IServicePriceDiscount {
    discountName: string,
    discountValue: number,
}