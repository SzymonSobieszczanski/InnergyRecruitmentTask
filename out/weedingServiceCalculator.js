"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weedingServiceCalculator = void 0;
var WeedingServiceCalculator = /** @class */ (function () {
    function WeedingServiceCalculator() {
        var _this = this;
        this.discountValue = 0;
        this.ServicePrices = [
            { serviceType: "WeddingSession", serviceYear: 2020, servicePrice: 600 },
            { serviceType: "WeddingSession", serviceYear: 2021, servicePrice: 600 },
            { serviceType: "WeddingSession", serviceYear: 2022, servicePrice: 600 },
            { serviceType: "Photography", serviceYear: 2020, servicePrice: 1700 },
            { serviceType: "Photography", serviceYear: 2021, servicePrice: 1800 },
            { serviceType: "Photography", serviceYear: 2022, servicePrice: 1900 },
            { serviceType: "VideoRecording", serviceYear: 2020, servicePrice: 1700 },
            { serviceType: "VideoRecording", serviceYear: 2021, servicePrice: 1800 },
            { serviceType: "VideoRecording", serviceYear: 2022, servicePrice: 1900 },
            { serviceType: "BlurayPackage", serviceYear: 2020, servicePrice: 300 },
            { serviceType: "BlurayPackage", serviceYear: 2021, servicePrice: 300 },
            { serviceType: "BlurayPackage", serviceYear: 2022, servicePrice: 300 },
            { serviceType: "TwoDayEvent", serviceYear: 2020, servicePrice: 400 },
            { serviceType: "TwoDayEvent", serviceYear: 2021, servicePrice: 400 },
            { serviceType: "TwoDayEvent", serviceYear: 2022, servicePrice: 400 },
        ];
        this.ServicesPricesDiscount = [
            { discountName: "WeddingSessionWithPhotohrapyhOrVideo", discountValue: 300 },
            { discountName: "WeddingSessionWithPhotohrapyh2020", discountValue: 300 },
            { discountName: "WeddingSessionWithPhotohrapyh2022", discountValue: 600 },
            { discountName: "PhotohrapyVideo2020", discountValue: 1200 },
            { discountName: "PhotohrapyVideo2021", discountValue: 1300 },
            { discountName: "PhotohrapyVideo2022", discountValue: 1300 }
        ];
        this.servicesPriceCalulcator = function (selectedServices, selectedYear, discount) {
            var value = 0;
            var avalibleDiscounts = new Array();
            var permanentDiscount = 0;
            var discountValue = 0;
            if (selectedServices.length === 0)
                return value;
            selectedServices.forEach(function (element) {
                value += _this.ServicePrices.filter(function (e) { return e.serviceYear === selectedYear
                    && e.serviceType === element; })[0].servicePrice;
            });
            if (discount) {
                if (selectedServices.some(function (e) { return e === "WeddingSession"; }) && (selectedServices.some(function (e) { return e === "Photography"; })
                    || selectedServices.some(function (e) { return e === "VideoRecording"; })) && (selectedYear === 2020 || selectedYear === 2021))
                    permanentDiscount = _this.ServicesPricesDiscount.filter(function (e) { return e.discountName === "WeddingSessionWithPhotohrapyhOrVideo"; })[0].discountValue;
                if (selectedServices.some(function (e) { return e === "WeddingSession"; }) && selectedServices.some(function (e) { return e === "Photography"; }) && selectedYear === 2022)
                    permanentDiscount = _this.ServicesPricesDiscount.filter(function (e) { return e.discountName === "WeddingSessionWithPhotohrapyh2022"; })[0].discountValue;
                if (selectedServices.some(function (e) { return e === "WeddingSession"; }) && selectedServices.some(function (e) { return e === "VideoRecording"; }) && selectedYear === 2022)
                    avalibleDiscounts.push(_this.ServicesPricesDiscount.filter(function (e) { return e.discountName === "WeddingSessionWithPhotohrapyhOrVideo"; })[0].discountValue);
                if (selectedServices.some(function (e) { return e === "VideoRecording"; }) && selectedServices.some(function (e) { return e === "Photography"; }))
                    avalibleDiscounts.push(_this.ServicesPricesDiscount.filter(function (e) { return e.discountName === ("PhotohrapyVideo" + selectedYear.toString()); })[0].discountValue);
                if (avalibleDiscounts.length > 0)
                    discountValue = Math.max.apply(Math, avalibleDiscounts);
                return value - discountValue - permanentDiscount;
            }
            return value;
        };
    }
    return WeedingServiceCalculator;
}());
var weedingServiceCalculator = new WeedingServiceCalculator();
exports.weedingServiceCalculator = weedingServiceCalculator;
//# sourceMappingURL=weedingServiceCalculator.js.map