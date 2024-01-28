import { LightningElement } from 'lwc';

export default class ProgressBarParent extends LightningElement {
    precentage =10;
    handleChange(event){
        this.precentage = event.target.value?event.target.value:100;
    }
}