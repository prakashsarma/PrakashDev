/**
 * Name of the class 	: NewsController.Apex
 * Authour 				: Prakash
 * Created Date 		: 24/11/2021
 * Description 			: Class which get New API's 
***/
public class NewsController {
    public static String domain = 'https://newsapi.org';
    public static String apiKey = 'd975b06fa8e148829f0354e5f09ccc12';
	@AuraEnabled
    public static String getNewApi(date currentdate){
        Http http = new Http();	
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint(domain+'/v2/everything?q=tesla&from='+currentdate+'2021-10-24&sortBy=publishedAt&apiKey='+apiKey);
        httpRequest.setMethod('GET');
        
        HttpResponse response = http.send(httpRequest);
        if(response.getStatusCode() == 200){
            system.debug('response'+response.getStatusCode());
			response.getBody();
			system.debug('response'+response.getBody());            
        }
        return'';
    }
}