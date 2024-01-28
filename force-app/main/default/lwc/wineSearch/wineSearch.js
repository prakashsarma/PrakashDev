import { api, LightningElement, track } from 'lwc';
import getWineParing from "@salesforce/apex/Spoonacular.getWineParing";
export default class WineSearch extends LightningElement {
  @track wineName;
 // @api convertedData;
  @api responceIsSuccess;
  @api text;
  @api pairing;
  //convertedData = [];
  recordDataArray = [];
  
  handleChange(event){
   this.wineName = event.target.value;
   console.log('wine name'+this.wineName);
  }
 handleonclick(){
   const name = this.wineName;
  getWineParing( {dishName :name})
  .then((result) => {
    const recorddata = JSON.parse(result);
    console.log(' this.recorddata'+ recorddata);
    if(result){
      this.text = recorddata.text;
      this.pairing = recorddata.pairings;
      console.log('record Data'+ this.text);
      console.log('record Data'+ this.pairing);
    }
  });
  }
  get hasDetails(){
    return this.text ? true : false;  
  }
  get hasPairing(){
    return this.pairing ? true : false;
  }
  }