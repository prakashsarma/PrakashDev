import { LightningElement, api, wire} from 'lwc';
import {getRelatedListRecordsBatch } from 'lightning/uiRelatedListApi';
export default class ChildRecordsLwc extends LightningElement {
  @api recordId;
  error;
  results;
  @wire(getRelatedListRecordsBatch, {
    parentRecordId: '$recordId',
    relatedListParameters: [
      {
        relatedListId: "Contacts",
        fields: ["Contact.Name", "Contact.Id"],
        sortBy: ["Contact.Name"],
      },
      {
        relatedListId: "Opportunities",
        fields: ["Opportunity.Name", "Opportunity.Amount"],
        sortBy: ["Opportunity.Amount"],
      },
    ],
  })
  listInfo({ error, data }) {
    if (data) {
        console.log('========'+JSON.stringify(data));
        //console.log('========>>>'+JSON.stringify(d));
      this.results = data.results;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.results = undefined;
    }
  }
}