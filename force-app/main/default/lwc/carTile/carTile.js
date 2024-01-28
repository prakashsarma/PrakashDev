import { api, LightningElement } from 'lwc';

export default class CarTile extends LightningElement {
    // this CAR public property will receave data from parent Component 
    @api car ={}

    handleClick(){
        // Dispatching new custom event wich contains each car record ID
        this.dispatchEvent(new CustomEvent('selected', {
            detail:this.car.Id
        }))
    }
}