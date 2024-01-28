import { LightningElement, track, wire } from 'lwc';
import getLatestAccounts from '@salesforce/apex/AccountController.getAccountsRecords';
const COLM = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'text'},
    {label: 'Industry', fieldName: 'Industry', type: 'text'}
];

export default class ConnectedCallbackLwc extends LightningElement {
    colm = COLM;
    @track isSpinner = false;
    @track accountList = [];

    connectedCallback(){
      
    }

    @wire(getLatestAccounts) fetchAccList(result){
        this.isSpinner = false;
        if(result.data){
            this.accountList = result.data;
            this.error = undefined;
        }else if(result.error){
            this.error = result.error;
            this.accountList = [];
        }

    }

}