@isTest
public class LeadProcessorTest {
    @testSetup
    Static void setup(){
	List<Lead> leadRecordList = new List<Lead>();
	//insert 200 records 
        for(Integer i= 0;i<=20;i++){
            leadRecordList.add(new Lead(Company = 'Trailhead Test'+i, LastName = 'Trail'+i,
                                        NumberOfEmployees= i, LeadSource = 'Dreamforce'
                                       	));
        }
		insert leadRecordList;        
    }
    @isTest 
    static void test(){
	Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Id batchId = Database.executeBatch(lp);
	Test.stopTest();
	system.assertEquals(21,[SELECT count() from Lead where LeadSource = 'Dreamforce']);       
    }
}