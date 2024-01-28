import {LightningElement, api} from 'lwc';

export default class ChildAlertComponent extends LightningElement {
   @api message
   @api link
}