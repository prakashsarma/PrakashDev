public with sharing class OpportunityController {
    public OpportunityController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpp(){
        return [Select Id, Name, Type, StageName, Amount, CloseDate, OwnerId, Owner.Name from opportunity];
    }
}