public class SearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> retriveAccountRecords(string accname){
        string keyName='%'+accname+'%';
        return [select Id, Name, Phone, Website, Industry, Description From Account];
    }
    
}