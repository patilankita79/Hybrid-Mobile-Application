<h1>Reddit Application</h1>
<hr>
<h3>Description :</h3>
<p> <b>Name of the application: </b>IonReddit <br> 
<b> Description: </b> This application fetches reddits/posts of specified category with the help of Sub Reddit API. We can list top reddits and filter them by category </p>

<hr>
<h1>Running the application</h1>
<li>Open command prompt. Go to project directory </li>
<li><u>Viewing the application in browser</u></br>&nbsp;&nbsp;&nbsp;&nbsp;Type the command => ionic serve
<li><u>to view the app on simulated mobile platforms and screen sizes</u></br>&nbsp;&nbsp;&nbsp;&nbsp;Type the command => ionic serve --l</li>

<hr>
<b>For android, generate apk</b> 
<li> Type the command => ionic cordova build android </li>


<hr>
This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

