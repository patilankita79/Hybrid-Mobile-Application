# Hybrid Mobile Applications
Following are the links to my repositories which are specific to IONIC framework
<li><a href ="https://github.com/patilankita79/Hybrid-Mobile-Applications/tree/master/ionreddit"> Reddit Application </a></li>
<li> <a href ="https://github.com/patilankita79/WeatherApp">Weather Application</a>
</li>
<li><a href="https://github.com/patilankita79/MobileAppForScienceAndTechnologyEntryProgram" >Mobile App for STEP Program </a></li>
<li><a href="https://github.com/patilankita79/Ionic3-ShoppingListMobileApplication" >ShoppingList Application </a></li>
<br/>
<h3>Technology Stack :</h3>
<li>Framework: Ionic 2, Ionic 3, Angular 4</li>
<li>Languages: HTML5, CSS3, TypeScript </li>
<li> Firebase</li>

<hr>
<h1>IonReddit</h1>
<h3>Application interface for iOS and Android platforms</h3>
<img src="https://github.com/patilankita79/HybridMobileApplications/blob/master/Screenshots_IonReddit/Screenshot%202017-09-14%2011.58.03.png" />
<img src="https://github.com/patilankita79/HybridMobileApplications/blob/master/Screenshots_IonReddit/Screenshot%202017-09-14%2011.58.18.png" />
<img src="https://github.com/patilankita79/HybridMobileApplications/blob/master/Screenshots_IonReddit/Screenshot%202017-09-14%2011.59.04.png" />
<hr>
<h3>Installation: </h3>
<blockquote>$npm install</blockquote>

<h3>Serve the application to browser: </h3>
<blockquote>$ionic serve</blockquote>


<h3>To view application in mobile simulated platforms</h3>
<blockquote>$ionic serve --l</blockquote>
OR
<blockquote>$ionic lab</blockquote>

<h3>Adding platforms </h3>

<i>To add android platform</i><br/>
<blockquote>$ionic cordova platform add android</blockquote>
<br/>
<i>To add iOS platform</i><br/>
<blockquote>$ionic cordova platform add ios</blockquote>
<h3>Build an android apk</h3>
<blockquote>$ionic cordova build android</blockquote>
<hr> 
While building an APK you might yet an error => <strong>Module not found: Error: Can't resolve 'promise-polyfill' </strong><br>
Refer this issue => https://github.com/ionic-team/ionic-app-scripts/issues/1001

<b>Solution: </b>
In the project directory run the following command,
<blockquote>$npm install promise-polyfill --save-exact</blockquote>

and then run the command
<blockquote>$ionic cordova build android</blockquote>


