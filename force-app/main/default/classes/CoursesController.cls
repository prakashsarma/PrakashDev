public with sharing class CoursesController {
 @AuraEnabled(cacheable=true)
public static List<Course_Details__c> getCourseName(String courseName){
    return[select id, Name from Course_Details__c where Name like:courseName];
}
}