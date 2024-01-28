public class AccountTriggerHelper {
  public static set<Id> accId = new set<Id>();
    public void onBeforeInsert(List<Account> newAccount){
            for(Account accobj : newAccount){
                system.debug('newAccount'+accobj);
                if(accobj.BillingStreet != null){
                  accobj.ShippingStreet =  accobj.BillingStreet;
                }
            }
        } 
    
    
    public void onAfterUpdate(List<Account> newAccountList){
        if(!newAccountList.isEmpty()){
            for(Account acc : newAccountList){
           	accId.add(acc.Id); 
        }
        }
        List<Opportunity> oppList = new List<Opportunity>();
        for(Opportunity opp : [Select id, StageName, AccountId, CreatedDate, CloseDate from Opportunity where AccountId in : accId]){
            if(opp.CreatedDate >= system.today()-30 && opp.StageName!='Closed Won'){
                opp.StageName = 'Closed Lost';
                oppList.add(opp);
            } 
        }
        if(oppList.size()>0){
          update oppList;  
        } 
    }  
}