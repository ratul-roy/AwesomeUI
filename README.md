# AwesomeUI
End-to-end Single Page Application Framework based on Angular2, hapijs and nginx. 

 
##There are total 3 modules.
	1. Angular2 front-end Application Framework along with webpack dev server
	2. Hapijs Based api-server (node server to cater all your business logic through APIs)
	3. nginx front-end-server (to serve static resources and proxy api calls)


##Features
	
	1. End-to-end production ready code base with working example
	2. Internationalization support through i18 webpack plugin.
	3. Webpack used as Module loader
	4. Support lazy loading of Angular2 modules.
	5. Unit testing support through Karma, Jasmine
	6. Code Coverage support through Protector
	7. Includes ready to use Angular2 Utility modules like HttpService, Congfig, globalStore, Pub-sub, validators
	8. Includes jquery and bootstrap.


##SetUp API Server (Hapijs)
	
	1. cd AwesomeUI/api-server-node
	2. npm install
	3.1. export NODE_ENV=development; node server.js (// Starts the API Server in DEV mode, CORS Enabled)
	3.2. export NODE_ENV=production; node server.js (// Starts the API Server in PROD mode, CORS Disabled)
	
	Your HapiJs based api-server will be up and running on http://localhost:7000. By Default it supports one API /getUserData. 
	http://localhost:7000/api/getUserData




##Run Angular2 Application (Dev Mode)
	
	1. cd AwesomeUI/clinet-ng2
	2. npm install
	3. npm start  or export LANG=hi;npm start (to see the page in hindi)

	Your FrontEnd Angular2 Application should be up and running on http://localhost:3000. This is webpack node dev server  and supports change detection and auto refreshing. Make sure your APPI server is running in DEV Mode with CORS Enabled to get data.


##Copy Angular2 Application to DIST (Prod Mode) 

	1. cd AwesomeUI/clinet-ng2
	2. npm run build:prod  (Builds, minifies, concatinates and copies assets and resources in dist Folder)


##Run Angular2 Application from DIST Through nginx(Prod Mode) 
	1. cd AwesomeUI/fe-server-nginx
	2. open nginx.conf and edit root to point to your AwesomeUI/client-ng2/dist folder.
	3. nginx -c your_full_location/nginx.conf  (start nginx on http://localhost:4000)
	4. nginx -s stop





