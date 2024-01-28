public class WrapperRecordsDisplayController {
    public List<WrapperData>  wrapperDataList {get;set;}
    public List<wrapperData> selectedRecords {get;set;}
    public WrapperRecordsDisplayController(){
        wrapperDataList = new List<WrapperData>();
        selectedRecords = new List<WrapperData>();
        WrapperData wrpData = new WrapperData();
        wrpData.accountname = 'Tesla Motors';
        wrpData.accountPhone = '2565892457';
        wrpData.accountEmail = 'teslamotors@gmail.com';

        wrapperDataList.add(wrpData);
        WrapperData wrpData1 = new WrapperData();
        wrpData1.accountname = 'TATA Motors';
        wrpData1.accountPhone = '2565892457';
        wrpData1.accountEmail = 'tataamotors@gmail.com';
        wrpData1.isChecked =false;
        wrapperDataList.add(wrpData1);
        for(Account acc :[Select id, Name,Phone from Account Limit 5]){
           WrapperData wrpData2 = new WrapperData();
            wrpData2.accountname = acc.Name;
            wrpData2.accountPhone = acc.Phone;
            wrpData2.isChecked =false;
             wrapperDataList.add(wrpData2);   
        }
        
        
    }
    public void displaySelectedRecords(){
        selectedRecords = new List<WrapperData>();
        for(WrapperData wrapperData :wrapperDataList){
            if(wrapperData.isChecked){
             selectedRecords.add(wrapperData);   
          }
        }
    }


  public class WrapperData{
    public boolean isChecked {get;set;}  
    public string accountname {get;set;}
    public string accountPhone{get;set;}
    public string accountEmail{get;set;}
 }
}