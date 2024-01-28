import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import DAILY_STATUS_API from '@salesforce/schema/Daily_Status__c';
import DAILY_STATUS_Date from '@salesforce/schema/Daily_Status__c.Status_Date__c';
import DAILY_STATUS_Project from '@salesforce/schema/Daily_Status__c.Project__c';
import DAILY_STATUS_Member from '@salesforce/schema/Daily_Status__c.Team_Member_Name__c';
import DAILY_STATUS_Task from '@salesforce/schema/Daily_Status__c.Task_Done__c';
import DAILY_STATUS_Hours from '@salesforce/schema/Daily_Status__c.Hours_Worked__c';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateStatusRecord extends LightningElement {
   @api objectApiName = DAILY_STATUS_API;
    fieldsList = [
        DAILY_STATUS_Date,
        DAILY_STATUS_Project,
        DAILY_STATUS_Member,
        DAILY_STATUS_Task,
        DAILY_STATUS_Hours
    ];
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: "Thank you for Submitting status",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        const editForm = this.template.querySelector('lightning-record-form');
        console.log('Edit form data'+editForm);
        editForm.recordId = null;
    }
}