Timeshift UI
Timeshift UI for for access as web application using Reactjs.

Installation
Run the following commands

npm install
This will install all the necessary npm dependencies.

npm run dev
This will start the application on port 8080

Files Usage
The UI is kept into src folder is further divided into sub-folders js, images. We are using webpack to bundle our code. "Js" folder is further divided into actions, "components", "pages", "stores". "Actions" contain the files in which backend api call are made using Ajax. Components and pages contains files that are to be shown ON UI. "Store" folder files process data received from actions and these store will update components.