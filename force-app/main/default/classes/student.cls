public class student{
    public void submit(List<Account> acc){
        List<Account> account=[select id, Name from Account where Name LIKE '%GTMSER-5899%'];
        List<Account> accountList = new List<Account>();
        for(Account acco :account){
            accountList.add(acco);
          }
       DELETE accountList;
    }
}