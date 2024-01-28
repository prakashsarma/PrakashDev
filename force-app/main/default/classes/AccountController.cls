public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [
            SELECT Name, AnnualRevenue, Industry, Rating
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsName(string accName){
        
       return [select Id, Name from Account where Name Like:accName];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsRecords(){
        
       return [select Id, Name, Phone, Industry from Account order by createddate desc LIMIT 5];
    }
    @AuraEnabled
    public static List<Account> getAccountsRating(){
        return [SELECT Name, Phone, Industry, Rating, CreatedDate FROM Account];
    }
}