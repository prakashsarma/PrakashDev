import { LightningElement } from 'lwc';

export default class QuiezApp extends LightningElement {
    
    selectedAnswers = {} // this object is for storying answers
    correctAnswers = 0 // to show the result
    isSubmitted = false
    // we created myquestions as Array of objects each question is one object
    myquestions = [
        {
            id:"question1", 
            question: "Which one of the following is not a template loop?", 
            answers:{ 
                a:"for:each", 
                b:"iterator", 
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"question2", 
            question: "Which one of the following is invalid in LWC  component folder?", 
            answers:{ 
                a:".svg", 
                b:".apex", 
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"question3", 
            question: "Which one of the following is not a directive?", 
            answers:{ 
                a:"for:each", 
                b:"if:true", 
                c:"@track"
            },
            correctAnswer:"c"
        }   
    ];
    get allNoteSelected(){
        return !(Object.keys(this.selectedAnswers).length === this.myquestions.length)
    }
    get isScroedFull(){
        return `slds-text-heading_largeslds-text-color_success  ${this.myquestions.length === this.correctAnswers? 
            'slds-text-color_success':'slds-text-color_error'}`
    }
    changeHandler(event){
        console.log('eventName ==========  '+event.target.name)
        console.log('value =========  '+event.target.value)
        const {name, value} = event.target
        this.selectedAnswers = {...this.selectedAnswers, [name]:value}
    }
    handleSubmit(event){
        event.preventDefault();
        let correct = this.myquestions.filter(item=>this.selectedAnswers[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true;
        console.log('correct answer '+this.correctAnswers)
    }
    handleReset(){
        this.selectedAnswers = {}
        this.correctAnswers = 0
        this.isSubmitted = false;
    }
    
}