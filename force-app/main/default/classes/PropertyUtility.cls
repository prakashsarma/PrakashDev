public class PropertyUtility {
    public static void newListedProperties(){
      List<Property__c  > newPropList = [SELECT Name, Broker__r.Email__c,Days_On_Market__c FROM Property__c where Days_On_Market__c <=30];
        for(Property__c p : newPropList){
            String propEmail = 'Property Name: ' + p.Name + ' Property Email: ' + p.Broker__r.Email__c;
            system.debug(propEmail);
        } 
    }
}