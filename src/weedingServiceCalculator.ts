import {ServiceYear, ServiceType} from "./common/servicesData";
import {IServicePrice, IServicePriceDiscount} from "./interface/IServicePrice"

class WeedingServiceCalculator {

  discountValue = 0;
  ServicePrices : Array<IServicePrice> = [
    {serviceType: "WeddingSession", serviceYear: 2020, servicePrice: 600},
    {serviceType: "WeddingSession", serviceYear: 2021, servicePrice: 600},
    {serviceType: "WeddingSession", serviceYear: 2022, servicePrice: 600},
    {serviceType: "Photography", serviceYear: 2020, servicePrice: 1700},
    {serviceType: "Photography", serviceYear: 2021, servicePrice: 1800},
    {serviceType: "Photography", serviceYear: 2022, servicePrice: 1900},
    {serviceType: "VideoRecording", serviceYear: 2020, servicePrice: 1700},
    {serviceType: "VideoRecording", serviceYear: 2021, servicePrice: 1800},
    {serviceType: "VideoRecording", serviceYear: 2022, servicePrice: 1900},
    {serviceType: "BlurayPackage", serviceYear: 2020, servicePrice: 300},
    {serviceType: "BlurayPackage", serviceYear: 2021, servicePrice: 300},
    {serviceType: "BlurayPackage", serviceYear: 2022, servicePrice: 300},
    {serviceType: "TwoDayEvent", serviceYear: 2020, servicePrice: 400},
    {serviceType: "TwoDayEvent", serviceYear: 2021, servicePrice: 400},
    {serviceType: "TwoDayEvent", serviceYear: 2022, servicePrice: 400},
];   

ServicesPricesDiscount: Array<IServicePriceDiscount> = [
  {discountName: "WeddingSessionWithPhotohrapyhOrVideo", discountValue: 300 },
  {discountName: "WeddingSessionWithPhotohrapyh2020", discountValue: 300 },
  {discountName: "WeddingSessionWithPhotohrapyh2022", discountValue: 600 },
  {discountName: "PhotohrapyVideo2020", discountValue: 1200 },
  {discountName: "PhotohrapyVideo2021", discountValue: 1300 },
  {discountName: "PhotohrapyVideo2022", discountValue: 1300 }
];

  servicesPriceCalulcator = (selectedServices: ServiceType[], selectedYear: ServiceYear, discount: boolean) => 
  {
     let value: number = 0;
     let avalibleDiscounts = new Array<number>();
     let permanentDiscount: number = 0; 
     let discountValue: number = 0;

        if(selectedServices.length === 0)
          return value;

        selectedServices.forEach(element => {            
            value += this.ServicePrices.filter(e => e.serviceYear === selectedYear
              && e.serviceType === element)[0].servicePrice;        
        });

        if(discount)
        {          
        
          if(selectedServices.some(e => e === "WeddingSession") && (selectedServices.some(e => e === "Photography") 
          || selectedServices.some(e => e === "VideoRecording")) && (selectedYear === 2020 || selectedYear === 2021))          
            permanentDiscount = this.ServicesPricesDiscount.filter(e => e.discountName === "WeddingSessionWithPhotohrapyhOrVideo")[0].discountValue;                  
                
          if(selectedServices.some(e => e === "WeddingSession") && selectedServices.some(e => e === "Photography") && selectedYear === 2022)           
              permanentDiscount = this.ServicesPricesDiscount.filter(e => e.discountName === "WeddingSessionWithPhotohrapyh2022")[0].discountValue;            
          
          if(selectedServices.some(e => e === "WeddingSession") && selectedServices.some(e => e === "VideoRecording") && selectedYear === 2022)           
              avalibleDiscounts.push(this.ServicesPricesDiscount.filter(e => e.discountName === "WeddingSessionWithPhotohrapyhOrVideo")[0].discountValue);            
           
          if(selectedServices.some(e => e === "VideoRecording") && selectedServices.some(e => e === "Photography"))           
              avalibleDiscounts.push(this.ServicesPricesDiscount.filter(e => e.discountName === ("PhotohrapyVideo"+ selectedYear.toString()))[0].discountValue);                
       
          if(avalibleDiscounts.length > 0)          
              discountValue = Math.max(...avalibleDiscounts);
                    
          return value - discountValue - permanentDiscount;
        }  

        return value; 
  }
}

const weedingServiceCalculator = new WeedingServiceCalculator();
export  {weedingServiceCalculator};


