import { LightningElement, api } from 'lwc';

export default class ProgressBarChild extends LightningElement {
    @api precentage;
    get getStyle() {
        return `width:` + this.precentage + '%';
        
    }
}