@isTest
public class AccountProcessorTest {
    public static testmethod void testAccountProcessor(){
        Account a = new Account();
        a.Name = 'Test Account';
        insert a;
        Contact con = new Contact();
        con.FirstName = 'Test';
        con.LastName = 'Contact';
        con.AccountId = a.id;
        insert con;
        List<Id> accIds = new List<Id>();
        accIds.add(a.id);
        Test.startTest();
        AccountProcessor.countContacts(accIds);
        Test.stopTest();
        Account acc = [Select id, Number_Of_Contacts__c from Account where id =: a.Id];
        system.assertEquals(integer.valueOf(acc.Number_Of_Contacts__c),1);
    }
}