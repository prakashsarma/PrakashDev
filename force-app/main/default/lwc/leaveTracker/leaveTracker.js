import { LightningElement} from 'lwc';
export default class LeaveTracker extends LightningElement {
    refreshleaverequests(){
        this.refs.myLeavescomp.refreshGrid();
    }
}