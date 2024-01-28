import { LightningElement, api} from 'lwc';

export default class CustomFileUpload extends LightningElement {
@api recordId;
fileData
    openfileUploded(event){
        const file = event.target.files[0]
        console.log(file);
        var reader = new FileReader()
        reader.onloadend =() =>{
            var base64 = reader.result
            this.fileData = {
                'filename' : file.name,
                'base64' : base64,
                'recordId' :this.recordId
            } 
            console.log(this.fileData);
        } 
        reader.readAsDataURL(file) 
    }
}