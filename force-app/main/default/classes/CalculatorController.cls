public class CalculatorController {
    public integer firstNumber{get;set;}
    public integer secondNumber{get;set;}
    public integer result{get;set;}
    
    public void add(){
        result = firstNumber+secondNumber;
    }
    public void Sub(){
        result = firstNumber-secondNumber;
    }
    public void Multiply(){
        result = firstNumber*secondNumber;
    }
    

}