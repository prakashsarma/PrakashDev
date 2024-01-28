import { LightningElement } from 'lwc';
const BASE_IMAGE_URL = 'https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars';
const COLORS = ['red','green','black','blue','white','brown'];
export default class CarColorPicker extends LightningElement {
    //Creating a local propery and mapping all colorsbelow
    colors = COLORS;
    // assigned default color to color which we have as o'th index of our array
    selectedColor = this.colors[2];

    get selectedCar(){ // Prepraing base url 
        return `${BASE_IMAGE_URL}/car_${this.selectedColor}.jpg`;
    }
    selectedCarColor(event){
        this.selectedColor = event.target.dataset.color;
    }
}