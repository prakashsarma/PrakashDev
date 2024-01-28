import { LightningElement, wire } from 'lwc';
import getClosedCases from '@salesforce/apex/CloseCaseController.getClosedCases';
import classSelectcases from '@salesforce/apex/CloseCaseController.classSelectcases';
export default class CloseCases extends LightningElement {
    
    _error;
    _cases;

    @wire(getClosedCases)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        this._cases = JSON.parse( JSON.stringify(data) );
      } else if (error) {
        console.error('Error:', error);
      }
    }

    handleClick = event =>{
        event.preventDefault();
        classSelectcases({caseString : JSON.stringify(this._cases)})
        .then(result => {console.log('Result \n ', result);
          window.location.reload();
        })
      .catch(error => {console.error('Error: \n ', error);
    });

    }

    handlecheckbox = event =>{
      event.preventDefault();
      let name = event.target.name;
      let checked = event.target.checked;
      let index = event.target.dataset.id;
      let caseWrapper = this._cases[index];
      window.console.log(checked);
      this._cases[index][name] = checked;

    }
}