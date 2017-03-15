# fullstack

Ran "ionic start appName blank --v2 --ts" to start a new blank template, ionic v2 project with TypeScript.

Can run "ionic generate page pageName" to create a new page

$ref and $id back in json response = http://stackoverflow.com/questions/19308992/how-do-i-disable-object-reference-creation-in-the-newtonsoft-json-serializer

Angular2 async loading variables in view = http://stackoverflow.com/questions/34833358/angular-2-typeerror-l-thing0-is-undefined-in-thing-title-in-appcomponent/34833436#34833436

For http requests with empty body, "unexpected end of JSON input":http://stackoverflow.com/questions/35734411/angular-2-web-api-json-parsing-error-syntax-error-unexpected-end-of-input

To get database set up run all migrations and then run the 4 db scripts in Api/Scripts/DBScripts


installed local storage with: npm install @ionic/storage --save --save-exact
local storage is for temp data, the phone may clean it up at any team
sql lite for persisted data on phone



For CORS on backend on other projects 
```xml
<system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="Access-Control-Allow-Origin" value="http://localhost:8100" />
        <add name="Access-Control-Allow-Methods" value="GET, POST, OPTIONS, PUT, DELETE" />
        <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type, Accept, Authorization" />
        <add name="Access-Control-Allow-Credentials" value="true" />
      </customHeaders>
    </httpProtocol>
    </system.webServer>
    ```
     to web.config

       and then in global.asax.cs

       protected void Application_OnBeginRequest()
       {
           var res = HttpContext.Current.Response;
           var req = HttpContext.Current.Request;

           if (req.HttpMethod == "OPTIONS")
           {
               res.StatusCode = 200;
               res.End();
           }
       }
   }