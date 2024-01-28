public class Example { 
    public static void method1(){
        Account account1 = new Account();
        account1.Name = 'Lirik';
        account1.AccountNumber = '12568';
        insert account1;
        
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User'];
        UserRole r = [SELECT Id FROM UserRole WHERE Name='CEO'];
        
        User userref = new User();
        userref.Alias = 'Am';
        userref.Email = 'praksh@lirik.io';
        userref.EmailEncodingKey = 'UTF-8';
        userref.LastName = 'Prakash';
        userref.LanguageLocaleKey = 'en_US';
        userref.LocaleSidKey = 'en_US';
        userref.ProfileId = p.id;
        userref.TimeZoneSidKey = 'America/Los_Angeles';
        userref.UserRoleId = r.id;
        userref.Username = 'demo333114414157@randomdemodomain.com';
        insert userref;
    }
}