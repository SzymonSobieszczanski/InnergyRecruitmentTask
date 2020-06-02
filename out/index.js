"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePrice = exports.updateSelectedServices = void 0;
var serviceState_1 = require("./serviceState");
var weedingServiceCalculator_1 = require("./weedingServiceCalculator");
exports.updateSelectedServices = function (previouslySelectedServices, action) {
    serviceState_1.state.selectedServices = previouslySelectedServices;
    if (action.type === "Select")
        serviceState_1.state.selectService(action.service);
    if (action.type === "Deselect")
        serviceState_1.state.deselectService(action.service);
    return serviceState_1.state.selectedServices;
};
exports.calculatePrice = function (selectedServices, selectedYear) {
    return ({
        basePrice: weedingServiceCalculator_1.weedingServiceCalculator.servicesPriceCalulcator(selectedServices, selectedYear, false),
        finalPrice: weedingServiceCalculator_1.weedingServiceCalculator.servicesPriceCalulcator(selectedServices, selectedYear, true)
    });
};
//# sourceMappingURL=index.js.map