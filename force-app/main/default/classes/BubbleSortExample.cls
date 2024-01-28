public class BubbleSortExample {
    public static void BubbleSort(List<Integer> valuetoSort){ 
        for(integer i =valuetoSort.size()-1;i>0;i--){
            system.debug('Integer value i========'+i);
            for(integer j = 0;j<i;j++){
                system.debug('Integer value j========'+j);
                if(valuetoSort[j] > valuetoSort[j+1]){
                    system.debug('comparing '+ valuetoSort[j]+'with'+ valuetoSort[j+1]);
                    swap(valuetoSort,j,j+1);
                    system.debug('%%%%%valuetoSort%%%%%%'+valuetoSort);
                }
            }
        } 
    }
    public static void swap(LIst<integer> integerList,integer l, integer m){
        Integer temp = integerList[l];
		integerList[l]  = integerList[m];
        integerList[m] = temp;
    }
}