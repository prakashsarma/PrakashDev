import { LightningElement } from 'lwc';

export default class Example extends LightningElement {
    searchValue;
    searchKeyword(event){
        this.searchValue = event.target.value;
        console.log(searchValue);
    }
}