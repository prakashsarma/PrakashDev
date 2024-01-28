public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public Static List<Contact> getContacts(){
        /*List<Contact> conList = [select Id,FirstName,LastName,Email FROM Contact WITH SECURITY_ENFORCED ORDER BY FirstName];
        return conList;*/
        throw new AuraHandledException('Forced error');
    }
}