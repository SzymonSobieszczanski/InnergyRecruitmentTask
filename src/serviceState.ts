import {ServiceType} from "./common/servicesData";

class ServiceState { 
    selectedServices:ServiceType[] = []
    mainServices: Array<ServiceType> = ["Photography", "VideoRecording"]
    relatedServices: Array<ServiceType> = ["BlurayPackage", "TwoDayEvent"]

    selectService(serviceName: ServiceType) 
    {   if(serviceName != null)                  
            if(!this.selectedServices.some(e => e === serviceName) && this.serviceSelectionConditions(serviceName))                
                this.selectedServices.push(serviceName);                                   
    }
    
    deselectService(serviceName: ServiceType) 
    {       
        if(this.selectedServices.some(e => e === serviceName) && serviceName != null)        
           this.serviceDeseletion(serviceName);        
    }

    serviceSelectionConditions(selectingService: ServiceType) : boolean 
    {
       if(selectingService !== "BlurayPackage")
            return true
        else if(selectingService === "BlurayPackage" && this.selectedServices.some(e => e === "VideoRecording"))
            return true

        return false       
    }

    serviceDeseletion(deslectingService: ServiceType)
    { 
        if(this.mainServices.some(e => e === deslectingService))    
        {
            this.selectedServices = this.selectedServices.filter(service => service != deslectingService); 
            if(this.selectedServices.some(r => this.relatedServices.includes(r)) && !this.selectedServices.some(r => this.mainServices.includes(r)))            
               this.selectedServices = this.selectedServices.filter((item) => { return this.relatedServices.indexOf(item) === -1})            
        }
        else if(this.relatedServices.some(e => e === deslectingService))        
            this.selectedServices = this.selectedServices.filter(service => service != deslectingService);               
    }
}

const state = new ServiceState();
export{state}