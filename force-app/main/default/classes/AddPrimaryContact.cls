public class AddPrimaryContact implements Queueable{
	public Contact c;
    public String states;
    public AddPrimaryContact(Contact conobj, String state){
        this.c = conobj;
        this.states = state;
    }
    public void execute(QueueableContext context){
        List<Contact> conList = new List<Contact>();
        for(Account accObj:[Select Id, Name, BillingState from Account where BillingState =:states limit 200]){
           	Contact con = c.clone();
            con.AccountId = accObj.id;
            conList.add(con);
        }
        insert conList;
    }
}