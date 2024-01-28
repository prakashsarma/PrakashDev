import { api, LightningElement, track, wire } from 'lwc';
import Logo from '@salesforce/resourceUrl/Logo';
import getCourseName from '@salesforce/apex/CoursesController.getCourseName';


export default class TrainingPlatform extends LightningElement {
    @api logoIcon = {
        Logo
    }
@track searchValue='';
@wire(getCourseName,{courseName:'$searchValue'}) 
retriveCourses({error,data}){

}


    courseDetailInfo=[
        {
            courseName:'Admin Certification',courseDuration:'30 Days',courseFee:'7,000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/693700_d3eb_4.jpg'
            },
            {
            courseName:'Apex development',courseDuration:'30 Days',courseFee:'10,000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/648408_b651_6.jpg'
            },
            {
            courseName:'Lightning Web Component',courseDuration:'30 Days',courseFee:'10,000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/2357210_2933_3.jpg'
            },
            {
            courseName:'Aura Component',courseDuration:'25 Days',courseFee:'9,000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/2510230_cae8_2.jpg'
            },
            {
            courseName:'Integration',courseDuration:'30 Days',courseFee:'12,000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/2423524_4df3_2.jpg'
            },
            {
            courseName:'Apex Triggers',courseDuration:'10 Days',courseFee:'3000', courseRating:'*****',
            bannerImg: 'https://img-a.udemycdn.com/course/480x270/3183172_c122_5.jpg'
            }];

           handleKeyChange(event){
            this.searchValue = event.target.value;
            }

}