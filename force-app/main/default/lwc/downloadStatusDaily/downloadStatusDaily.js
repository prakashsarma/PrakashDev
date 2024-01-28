import { api, LightningElement, track, wire } from 'lwc';
import getStatusRecords from '@salesforce/apex/DailyStatusController.getStatusRecords'
import {exportCSVFile} from 'c/csvUtilty'
import DAILY_STATUS_Date from '@salesforce/schema/Daily_Status__c.Status_Date__c';
import DAILY_STATUS_Project from '@salesforce/schema/Daily_Status__c.Project__c';
import DAILY_STATUS_Member from '@salesforce/schema/Daily_Status__c.Team_Member_Name__c';
import DAILY_STATUS_Task from '@salesforce/schema/Daily_Status__c.Task_Done__c';
import DAILY_STATUS_Hours from '@salesforce/schema/Daily_Status__c.Hours_Worked__c';
const COLUMNS  = [
    {label: 'Date', fieldName: DAILY_STATUS_Date.fieldApiName, type: 'date' },
    { label: 'Project', fieldName: DAILY_STATUS_Project.fieldApiName, type: 'text' },
    { label: 'Member', fieldName: DAILY_STATUS_Member.fieldApiName, type: 'text' },
    { label: 'Task', fieldName: DAILY_STATUS_Task.fieldApiName, type: 'text' },
    { label: 'Hours', fieldName: DAILY_STATUS_Hours.fieldApiName, type: 'Number' },

];

export default class DownloadStatusDaily extends LightningElement {

    columns = COLUMNS;
    @track statusData = [];
    @wire(getStatusRecords) statusHandler({data,error}){

        if(data){
            console.log(data)
            this.statusData = data;
            console.log('data'+this.statusData);
        }else if (error) {
            console.log(error);
            }
    }
    statusHeaders = {
        Project__c : "Project",
        Status_Date__c : "Date",
        Task_Done__c : "Task Completed",
        Team_Member_Name__c : "Team Member Name"
    }
    downloadStatusData(){
        console.log("download completed");
        exportCSVFile(this.statusHeaders, this.statusData, "Daily Status detail")
    }
}