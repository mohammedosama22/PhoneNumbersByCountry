// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  "enviroment": "dev",
  "JumiaTask": "http://localhost:8088/Jumia/v1",
  "appVersion": "v1.2",
  "isLogging": true,
  "_comment": {
    "1": "You May Change These Settings in Different Enviroments",
    "2": "To build the project to production enviroment use $:>  ng build --base-href=/IoTBackofficeApplication/ --prod --aot=false --build-optimizer=false",
    "3": "To run the project in developemnt enviroment with specific port run $:> ng serve --port 9091",
    "4": "Please Spacify Your Enviroment use : dev or preprod or prod ",
    "5": "isLogging can be true or fasle"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
