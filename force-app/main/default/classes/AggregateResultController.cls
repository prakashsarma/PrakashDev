public with sharing class AggregateResultController {
    public List<AggregateResult> aggregateResultList{get;set;}
    public AggregateResultController() {
        aggregateResultList = new List<AggregateResult>();
        aggregateResultList = [select count(id) oppCount, StageName oppStage 
                            from Opportunity group by StageName];
        
    }
}