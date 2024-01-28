import { api, LightningElement } from 'lwc';

export default class ParentCmpLwc extends LightningElement {
    @api username;
    @api useremail;
    @api userphone;
    @api useraddress;
    handleAction(){
       this.username = this.template.querySelector('.userName').value; 
       this.useremail = this.template.querySelector('.userEmail').value;
       this.userphone = this.template.querySelector('.userPhone').value;
       this.useraddress = this.template.querySelector('.userAddress').value;
       
       var valueString ={
           getUserName:this.username,
           getUserEmail:this.useremail,
           getUserPhone:this.userphone,
           getUserAddress:this.useraddress
       };
       window.console.log(JSON.stringify('fullValueStr' + valueString ));
       this.template.querySelector(c-child-cmp-lwc).displayChildValueAction(valueString);
       this.username = this.template.querySelector('.userName').value='';
       this.useremail= this.template.querySelector('.userEmail').value='';
       this.userphone= this.template.querySelector('.userPhone').value='';
       this.useraddress= this.template.querySelector('.userAddress').value='';
    }

}