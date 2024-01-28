trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
AccountTriggerHelper handler = new AccountTriggerHelper();
    if(Trigger.isinsert && Trigger.isBefore){
        handler.onBeforeInsert(Trigger.new);
    }
    if(Trigger.isUpdate && Trigger.isAfter){
        handler.onAfterUpdate(Trigger.new);
    }    
}