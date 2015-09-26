'use strict';
let React = require('react');

let About = React.createClass ({
  render() {
    return (
      <div id="main-wrapper">
        <div id="main" className="container">
          <article className="box post">
            <header>
              <h2>Hello cooking <em>world</em>!</h2>
            </header>
            <div className="row">
              <div className="6u">
                <span className="image featured"><img src="./images/me.jpg" alt=""/></span>
              </div>
              <div className="6u">
                <p>I'm Jelena, you can learn more about me on <a href="https://www.facebook.com/jelena.fiodorova" target="_blank">Facebook</a>.</p>
                <p><em>Shortly,</em> I love to cook and to eat :) For more than 10 years I'm cooking at home. It slightly became my hobby. I love everything about cooking: books, tv shows, master classes - you name it. You will find recipes that I actually cook at home everyday or for special occasions.</p>
                <p>This blog is not for beginners and you will not find detailed instructions how to cook here. Mostly I write notes for myself to remember how I did the recipe and to share my favourite food ideas with my friends. </p>
                <p>And this particular version of the blog is <em>special</em> because I developed it from the scratch (I mean I wrote a code too not only recipes). So if you are more interested in software development than cooking: its RestAPI done in Node.js on a backend and AngularJS on frontend, you can find source code on github <a href="https://github.com/JelenaBarinova/CookingBlog" target="_blank">CookingBlog</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
});

module.exports = About;