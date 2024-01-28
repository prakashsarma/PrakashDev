import { api, LightningElement, track, wire } from 'lwc';
import retriveAccountRecords from '@salesforce/apex/SearchController.retriveAccountRecords';
const columns=[
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone Number', fieldName: 'Phone' },
    { label: 'Website Url', fieldName: 'Website' },
    { label: 'Industry', fieldName: 'Industry'},
    { label: 'Account Description', fieldName: 'Description'},
];

export default class accountTableDisplay extends LightningElement {

@track accountName;
@track accountList=[];
@api isshow= false;

@wire(retriveAccountRecords, {accname:'$accountName'})
getAccounts({error,data}){
    if(data){
        this.accountList=data;
        this.isshow=true;
    }else if(error){
        

    }
}
handlechangeAccName(event){
    
    this.accountName = event.target.value;
    
}




}