public class FactorialOfNumber {

    public void factNumber(Integer n){
        long value = 0 ;
        if(n<0){
            system.debug('Factorial Number'+n);
        }else{
            for(integer i = 1;i<=n;i++){
             value = value*i;  
            }
            system.debug('%%%%%Final value of Factorial%%%%%'+value);
        }        
    }
}