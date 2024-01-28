import { LightningElement, api } from 'lwc';

export default class SampleChildAlert extends LightningElement {
    @api message;
    @api className;

    get classNames(){
        return this.className ? `alert ${this.className}`: `alert`
    }
}