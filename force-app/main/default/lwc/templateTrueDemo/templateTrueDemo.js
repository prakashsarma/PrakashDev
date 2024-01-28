 import { LightningElement, track } from 'lwc';

export default class TemplateTrueDemo extends LightningElement {
    // after sprint 20 we don't need to add @track to property to make it reactive.
      showText = false;
      showText1 = false;
      hideText = false;
     showHandler(){
        this.showText = true;
        this.showText1 = true;
    }
}