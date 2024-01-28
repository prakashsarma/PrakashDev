public class OlderAccountsUtility {
    
    public static void updateOlderAccounts(){
        list<Account> oldAccounts  = [Select id, Description from Account ORDER By CreatedDate ASC Limit 5 ];
        for(Account acct : oldAccounts){
            acct.Description = 'Heritage Account'; 
		}
        update oldAccounts;
    }

}