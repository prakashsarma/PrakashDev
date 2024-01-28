@isTest
public class DailyLeadProcessorTest {
    public static List<Lead> leadList; 
	@testSetup
    static void setup(){
        leadList = new List<Lead>();
        for(Integer i=0;i<=200;i++){
			leadList.add(new Lead(Company = 'Trailhead Test'+i, LastName = 'Ln'+i, Status = 'Working - Contacted'));
        }
        insert leadList;
    }
    @isTest
    static void myUnitTest(){
        String CRON_EXP = '0 0 0 15 3 ? 2022';
        Test.startTest();
        // Schedule the test job
         String jobId = System.schedule('ScheduledApexTest',CRON_EXP,new DailyLeadProcessor());
        // Verify the scheduled job has not run yet.
        List<Lead> lt = [SELECT Id FROM Lead WHERE LeadSource = null Limit 200];
        system.assertEquals(200, lt.size());
        Test.stopTest();
    }
}