import { api, LightningElement } from 'lwc';

export default class ChildCmpLwc extends LightningElement {
    @api userNameValue;
    @api userEmailValue;
    @api userPhoneValue;
    @api userAddressValue;

    @api displayChildValueAction(nameStr){
        this.userNameValue = nameStr.getUserName;
        this.userEmailValue = nameStr.getUserEmail;
        this.userPhoneValue = nameStr.getUserPhone;
        this.userAddressValue = nameStr.useraddress;

    }
}