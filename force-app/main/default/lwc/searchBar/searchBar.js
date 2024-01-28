import { LightningElement, track } from 'lwc';
import getNewApi from "@salesforce/apex/NewsController.getNewApi";

export default class SearchBar extends LightningElement {
    @track searchedValue;
    handleChange(event){
        this.searchedValue = event.target.value;
        console.log('data'+this.searchedValue);
    }

}