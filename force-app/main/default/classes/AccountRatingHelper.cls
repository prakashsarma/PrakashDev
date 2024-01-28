public class AccountRatingHelper {
    public static List<Contact> conList  = new List<Contact>();
    public void OnAfterInsert(Map<Id, Account> accountMap){
        
        for(Account acc: accountMap.values()){
            if(acc.Rating == 'Hot'){
                Contact con = new Contact();
                 con.FirstName = 'Lirik'; 
                 con.LastName = 'io';
                  conList.add(con);
            } 
            }
           insert conList;
        }
        
    }