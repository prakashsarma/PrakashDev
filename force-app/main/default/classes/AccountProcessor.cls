public class AccountProcessor {   
    @future
    public static void countContacts(List<Id> accountIds){ 
        List<Account> accList = [SELECT Id, Number_Of_Contacts__c,(SELECT Id from Contacts) from Account where id in :accountIds];
        
        for(Account acc : accList){
            acc.Number_Of_Contacts__c = acc.Contacts.size();
        } 
        update accList;
    }
}