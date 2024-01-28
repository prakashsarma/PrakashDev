public with sharing class DisplayAccWithContact {
    public String accName{get;set;}
    List<Account> listAcc = new List<Account>();
    List<Contact> listcon = new List<Contact>();
    Set<String> accId = new set<String>();
    public List<Contact> getContacts(){
        listAcc = [SELECT Id, name from Account where name=:accName];
        for(integer i=0;i<listAcc.size();i++){
            accId.add(listAcc[i].Id);
        }
        listcon =[SELECT Id, name, phone, email, accountId from Contact where accountId in:accId];
        return listcon;
    }
    public pagereference showContacts(){
        return null;
    }

}