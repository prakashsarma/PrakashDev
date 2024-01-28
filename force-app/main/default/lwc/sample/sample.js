import { LightningElement, track } from 'lwc';

export default class Sample extends LightningElement {
    @track firstNumber = 0 ;
    @track secondNumber = 0;
    @track result;

    handelResultChanges(event){
        const currentInputname = event.target.name;
        const currentValue = event.target.value;
        
        if(currentInputname === 'fNumber'){
               this.firstNumber =  currentValue;
        }
        else{
            this.secondNumber = currentValue;
        }
    }
        handelAddResult(){
            this.result = parseInt(this.firstNumber)+parseInt(this.secondNumber);
        }
        handelSubResult(){
            this.result = parseInt(this.firstNumber)-parseInt(this.secondNumber);
        }
        handelMulResult(){
            this.result = parseInt(this.firstNumber)*parseInt(this.secondNumber);
        }
        handelDivResult(){
            this.result = parseInt(this.firstNumber)/parseInt(this.secondNumber);
        }

}