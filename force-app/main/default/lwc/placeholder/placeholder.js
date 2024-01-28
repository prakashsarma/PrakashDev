import { api, LightningElement } from 'lwc';
/***
 * Import static resource from salesforce with the below import statment
 */
import CAR_HUB_PLACEHOLDER from '@salesforce/resourceUrl/placeholder'
export default class Placeholder extends LightningElement {
 @api message
 placeholderUrl =  CAR_HUB_PLACEHOLDER
}