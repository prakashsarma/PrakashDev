import { LightningElement, track, wire,api} from 'lwc';
import getAccountsRating from '@salesforce/apex/AccountController.getAccountsRating';
const COLS=[  
    {label:'Name',fieldName:'Name', type:'text'},  
    {label:'Phone',fieldName:'Phone', type:'text'},  
    {label:'Industry',fieldName:'Industry', type:'text'},
    {label:'Rating',fieldName:'Rating', type:'text',cellAttributes:{
        class:{fieldName:'ratingColor'}
    }}  
  ];  
export default class AccTableClone extends LightningElement {
    cols=COLS;
    accountList = [];
   // @api ratingValue = "Cold";

    @wire (getAccountsRating) wiredAccounts({data,error}){
        if (data) {
        this.accountList = data.map(item=>{
            let ratingColor = item.Rating == 'Cold'
            return {...item, "ratingColor":"slds-icon slds-icon-text-light"}
        })
        console.log(this.accountLis);
        } else if (error) {
            console.error('Error:', error);
            this.accountList = undefined;
            
        }
   }
}