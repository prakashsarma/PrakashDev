import { LightningElement, track } from 'lwc';
import getNewApi from "@salesforce/apex/NewsController.getNewApi";

export default class SearchBar extends LightningElement {
    name;
    author;
    title;
    description;
    url;
    autoData = [];
    fetchAutoNews(){
        getNewApi()
        .then((result)=>{
           this.autoData = JSON.parse(result);
            if(result){
                this.name = autoData.name;
                this.author = autoData.author
                this.title = this.autoData.title
                this.description = this.description
                this.url = this.url;
            }
        })
    }
}