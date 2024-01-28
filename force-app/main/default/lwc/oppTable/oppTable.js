import { LightningElement, track, wire } from 'lwc';
import oppValues from '@salesforce/apex/OpportunityController.getOpp';
 
const colums = [
    {label:'opportunity name', fieldName: 'oppLink', type: 'url', typeAttributes:{label:{fieldName: 'Name'}, tooltip:'Go to detail page ', target: '_blank'}},
    {label: 'Type', fieldname: 'Type', type: 'text'},
    {label: 'Stage', fieldname: 'Stage', type: 'text'},
    {label: 'Amount', fieldname: 'Amount', type: 'text'},
    {label: 'Close Date', fieldname: 'Close Date', type: 'text'}

  ];

export default class OppTable extends LightningElement {
      @track error; 
     @track opps; // All opportunities available for data table
     @track showTable = false // renders the table by collecting data from apex contoller
     @track recordToDisplay = [];
     @track rowNumberOffset;
    @wire(oppValues) wopps({error,data}){
      if(data){
          let recs = [];
           for(let i=0; i<data.length; i++){
               let opp = {};
                opp.rowNumber = ''+(i+1);
                opp.oppLink = '/'+data[i].id;
                opp  = Object.assign(opp, data[i]);
                recs.push(opp);
           } 
           this.opps = recs;
           this.showTable = true;
      }else{
            this.error = error;
      }
    }
    handlePaginatorChange(event){
      this.recordsToDisplay = event.detail;
      this.rowNumberOffset = this.recordsToDisplay[0].rowNumber-1;
  }

}