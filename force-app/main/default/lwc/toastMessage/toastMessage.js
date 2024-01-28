import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastMessage extends LightningElement {
 @track msg;

 msgChange(event){
     this.msg = event.target.value;

 }
 showToast(){
    const tostEvnt = new ShowToastEvent({
      title: 'HI this my first Toast message',
      message : this.msg, variant: 'success'
    });
    this.dispatchEvent(tostEvnt);
 }
 cancleClick(event){
    this.template.querySelector('lightning-input[data-name="msg"]').value = null;
 }
}