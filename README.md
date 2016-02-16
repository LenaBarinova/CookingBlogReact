Current version may be checked here: [CookingBlogReact](http://jelenabarinova.github.io/CookingBlogReact/)

## tl;dr
Download the code and run it: 

~~~
$npm install
~~~

To test, build code and open localy - run 

~~~
$gulp build
~~~

If you are using Visual Studio Code - you can build it using `⇧⌘B` (on Mac).  

If `Error: EMFILE` error happens, run:

~~~
ulimit -n 2560
~~~

To load recipe data from json web server is needed, I used http-server from npm. Running it with CORS enabled.

~~~
http-server --cors -a localhost -p 8000 
~~~

## TO DO:
1. Remove recipe URL from JSON, add Link object instead `a href` 
2. Autogenerate links to css and js files in gulp

4. Make Categories filtering 
5. Hide categories dropdown in click
6. Split categories componenet to menu and categories