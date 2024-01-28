import { LightningElement,wire, track, api } from 'lwc';
import getAccountsRating from '@salesforce/apex/AccountController.getAccountsRating';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CREATED_FIELD from '@salesforce/schema/Account.CreatedDate';
export default class AccTable extends LightningElement {
    @track accountList = [];
    accList ; 
    activeDateTime;
    @api recordId;
    totalMilliseconds;
    setTimeInterval;
    timer;
    account;
    connectedCallback(){

        getAccountsRating()
        .then(data =>{
            console.log('data value'+data);
            data.forEach(r => {
                if(r.Rating == 'Cold'){
                    r.styleColor= 'background-color:#808080';
                    r.disabled =true;
                   // r.type='notcheck'
                }else{
                    r.styleColor = 'background-color:none';
                    r.disabled=false;
                   // r.type='checkbox';
                }  
            });  
            this.accountList = data;
            //console.log( 'Account date  value is' + this.accountList.fields.CreatedDate.value );
            console.log('accountList'+this.accountList);
        })
   }
   
    handleOnChange(event){
       let selectedRows = (this.template.querySelectorAll('lightning-input'));
       for(let i = 0; i < selectedRows.length; i++){
        if(selectedRows[i].disabled === false) {
                selectedRows[i].checked = event.target.checked;
        }
       }
      
   }

   @wire( getRecord, { recordId: '$recordId', fields: [CREATED_FIELD] } )
    wiredAccount( { error, data } ) {
        if ( data ) {

            this.account = data;
            console.log( 'Account is ' + JSON.stringify( this.account ) );
            console.log( 'Account CreatedDate value is ' + this.account.fields.CreatedDate.value );
            this.activeDateTime = this.account.fields.CreatedDate.value;
            let currentDateTime = new Date();
            console.log( 'currentDateTime is' + currentDateTime );
            console.log( 'currentDateTime in UTC is' + currentDateTime.toISOString() );
            let diff = new Date( currentDateTime.toISOString() ) - Date(this.activeDateTime );
            console.log(  'diff is' + diff ); 
            this.totalMilliseconds = diff;
            this.setTimeInterval = setInterval( () => {
                let totalSeconds = parseInt( Math.floor( this.totalMilliseconds / 1000 ) );
                let totalMinutes = parseInt( Math.floor( totalSeconds / 60 ) );
                let totalHours = parseInt( Math.floor( totalMinutes / 60 ) );
                let days = parseInt( Math.floor( totalHours / 24 ) );
                let seconds = parseInt( totalSeconds % 60 );
                let minutes = parseInt( totalMinutes % 60 );
                let hours = parseInt( totalHours % 24 );
                let milliseconds = Math.floor( ( this.totalMilliseconds % ( 1000 ) ) );
                this.timer = days + 'days' + hours + 'hours' + minutes +'minutes' + seconds + 'seconds' + milliseconds + 'milliseconds'; 
            }, 100 );
        }else if ( error ) {

            console.log(  'Error: ' + JSON.stringify(error ) );

        }
    }
   /*** @wire (getAccountsRating) wiredAccounts({data,error}){
        if (data) {
          // this.accountList = data;
            console.log('data value'+data);
            data.forEach(row => {
                if(row.Rating == 'Cold'){
                    row.styleColor= 'background-color:red';
                }else{
                    row.styleColor = 'background-color:none';
                } 
            });  
            this.accountList = data;
             for (var key in data) {
                mapResult.push({ key: key, value: data[key] });
            }
            this.accountList = mapResult.map(e => {
                let isLess = true
                //e.Rating == 'Cold';
                console.log('isLess val'+isLess);
                e.styleColor = isLess ? 'background-color:red' :'background-color:none';
                return e;
           });

        }*/
    }