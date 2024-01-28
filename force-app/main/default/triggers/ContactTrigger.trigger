trigger ContactTrigger on Contact (before insert) {
    ContactTriggerHelper conhandler = new ContactTriggerHelper();
    if(Trigger.isInsert && Trigger.isBefore){
        conhandler.onBeforeInsert(Trigger.new);
    }
}