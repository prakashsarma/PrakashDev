/**
 * Name of the class 	: Spoonacular.Apex
 * Authour 				: Prakash
 * Created Date 		: 25/09/2021
 * Description 			: 
***/
public class Spoonacular {
    private Static final string RECEIPE_API = 'https://api.spoonacular.com';
    private Static final string API_KEY = '3966ca07473c47d592048cb85d8ce5de';
    
    @AuraEnabled
    public static String getRandomRecipe(){
        Http http = new Http();
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint(RECEIPE_API+'/recipes/random?apiKey='+API_KEY);
        httpRequest.setMethod('GET');
        
        HttpResponse response = http.send(httpRequest);
         // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200){
            system.debug('response'+response.getStatusCode());
            return response.getBody();
        }
        return '';
    }
    
    @AuraEnabled
        public static String getRecipe(String recipeId){
        Http http = new Http();
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint(RECEIPE_API+'/recipes/'+recipeId+'/information?apiKey='+API_KEY);
        httpRequest.setMethod('GET');
        
        HttpResponse response = http.send(httpRequest);
         // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200){
            return response.getBody();
        }
        return '';
    }
    
    @AuraEnabled
    public static String getRecipeByIngredients(String ingredients){
        Http http = new Http();
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint(RECEIPE_API+'/recipes/findByIngredients?ingredients='+ingredients+'&number=20&apiKey='+API_KEY);
        httpRequest.setMethod('GET');
        
        HttpResponse response = http.send(httpRequest);
         // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200){
            return response.getBody();
        }
        return '';
    }
    @AuraEnabled
    
    public static String getWineParing(string dishName){
        system.debug('Value from Search bar======'+dishName);
        Http http = new Http();
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint(RECEIPE_API+'/food/wine/dishes?wine='+dishName+'&apiKey='+API_KEY);
        httpRequest.setMethod('GET');
        HttpResponse response = http.send(httpRequest);
        if(response.getStatusCode() == 200){
            system.debug('Status code'+response.getStatusCode());
            system.debug('responce'+response.getBody());
            return response.getBody();
        }
        return '';
        //https://api.spoonacular.com/food/wine/dishes?wine=wine&apiKey=3966ca07473c47d592048cb85d8ce5de
    }
}