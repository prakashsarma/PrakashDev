public with sharing class DailyStatusController {
    @AuraEnabled(cacheable=true)
    public static List<Daily_Status__c> getStatusRecords() {

        return [SELECT Id, Status_Date__c, Project__c, Team_Member_Name__c, Task_Done__c,Hours_Worked__c from Daily_Status__c where createdDate = TODAY];
    }
}