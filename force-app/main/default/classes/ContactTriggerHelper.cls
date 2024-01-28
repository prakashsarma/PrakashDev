public class ContactTriggerHelper {
    
    public void onBeforeInsert(List<Contact> contactObjList){
        Map<String, Contact> emailMap = new Map<String, Contact>();
		Map<String, Contact> phoneMap = new Map<String, Contact>();
        for(Contact conObj : contactObjList){
            emailMap.put(conObj.Email, conObj);
            phoneMap.put(conObj.Phone, conObj);
        }
        String errorMessage = '';
        List<Contact> existingContactList = [Select Id, Email, Phone FROM Contact Where Email IN:emailMap.keySet() OR Phone IN:phoneMap.keySet()];
        if(existingContactList.size()> 0){
            for(Contact duplicateCon : existingContactList){
                if(duplicateCon.Email != null){
                   errorMessage = 'Duplicate Phone number found'; 
                }
                 if(duplicateCon.Phone != null){
                    errorMessage = 'Duplicate Phone number found';
                } 
            }
        }
        for(Contact duplicateContact :contactObjList){
            if(errorMessage!=''){
				duplicateContact.addError('Your Contact '+errorMessage +' already exists in system.');
			}
        }
    }
}