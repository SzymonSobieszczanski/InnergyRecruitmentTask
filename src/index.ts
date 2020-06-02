import {ServiceYear, ServiceType} from "./common/servicesData";
import {state} from "./serviceState";
import {weedingServiceCalculator} from "./weedingServiceCalculator"


export const updateSelectedServices = (previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }) =>
    {
    state.selectedServices = previouslySelectedServices;
    
    if(action.type === "Select")    
        state.selectService(action.service);      

    if(action.type === "Deselect")
       state.deselectService(action.service)

    return state.selectedServices;  
    };

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear)  => 
    ({ 
        basePrice: weedingServiceCalculator.servicesPriceCalulcator(selectedServices,selectedYear, false), 
        finalPrice: weedingServiceCalculator.servicesPriceCalulcator(selectedServices,selectedYear, true)
    });   

 


    
