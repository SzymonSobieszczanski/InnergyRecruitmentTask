"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
var ServiceState = /** @class */ (function () {
    function ServiceState() {
        this.selectedServices = [];
        this.mainServices = ["Photography", "VideoRecording"];
        this.relatedServices = ["BlurayPackage", "TwoDayEvent"];
    }
    ServiceState.prototype.selectService = function (serviceName) {
        if (serviceName != null)
            if (!this.selectedServices.some(function (e) { return e === serviceName; }) && this.serviceSelectionConditions(serviceName))
                this.selectedServices.push(serviceName);
    };
    ServiceState.prototype.deselectService = function (serviceName) {
        if (this.selectedServices.some(function (e) { return e === serviceName; }) && serviceName != null)
            this.serviceDeseletion(serviceName);
    };
    ServiceState.prototype.serviceSelectionConditions = function (selectingService) {
        if (selectingService !== "BlurayPackage")
            return true;
        else if (selectingService === "BlurayPackage" && this.selectedServices.some(function (e) { return e === "VideoRecording"; }))
            return true;
        return false;
    };
    ServiceState.prototype.serviceDeseletion = function (deslectingService) {
        var _this = this;
        if (this.mainServices.some(function (e) { return e === deslectingService; })) {
            this.selectedServices = this.selectedServices.filter(function (service) { return service != deslectingService; });
            if (this.selectedServices.some(function (r) { return _this.relatedServices.includes(r); }) && !this.selectedServices.some(function (r) { return _this.mainServices.includes(r); }))
                this.selectedServices = this.selectedServices.filter(function (item) { return _this.relatedServices.indexOf(item) === -1; });
        }
        else if (this.relatedServices.some(function (e) { return e === deslectingService; }))
            this.selectedServices = this.selectedServices.filter(function (service) { return service != deslectingService; });
    };
    return ServiceState;
}());
var state = new ServiceState();
exports.state = state;
//# sourceMappingURL=serviceState.js.map