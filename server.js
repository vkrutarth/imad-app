var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    'article-one':{
      title:'Article-One | KMV',
      heading:'Article One',
      date:'3rd August,2017',
      content:
      `<p>
        Karma Believer
      </p>
      <p>
        Fan of Man in Blue
      </p>`
    },
    'article-two':{
      title:'Article-Two | KMV',
      heading:'Article Two',
      date:'4rd August,2017',
      content:
      `<p>
          A Clasher @HellBoyz
      </p>
      <p>
          Dil se India
      </p>`
    },
    'article-three':{
      title:'Article-Three | KMV',
      heading:'Article Three',
      date:'4rd August,2017',
      content:
      `<p>
          Guy with Specs
      </p>
      <p>
          Nation Comes First
      </p>`
    }
}
function createTemplate(data){
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content;
  var htmlTemplate=`
  <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width-device-width,initial-scale=1" />
           <style>
             <link href="/ui/style.css" rel="stylesheet" />
          </style>
      </head>
      <body>
          <div class="app">
          <div>
              <a href="/">Home</a>
          </div>
          <h3>
              ${heading}
          </h3>
          <hr/>
          <div>
              ${date}
          </div>
          <div>
              ${content}
          </div>
          </div>
      </body>
  </html>
  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
  var articleName=req.params.articleName;
  res.sendFile(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
