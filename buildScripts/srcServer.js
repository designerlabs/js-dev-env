let express = require('express');
<<<<<<< HEAD
let path = require('path');
let open = require('open');
=======
let path = require ('path');
let open = require ('open');
>>>>>>> 9795813feff3f128812ae4c2adb81eca42b3627d

let port = 3000;
let app = express();

<<<<<<< HEAD
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
=======
app.get('/',function(res, req){
  req.sendFile(path.join(__dirname, '../src/index.html'));
>>>>>>> 9795813feff3f128812ae4c2adb81eca42b3627d
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
<<<<<<< HEAD
    open('http://localhost:'+ port);
  }
});
=======
   open('http://localhost:'+port);
  }
});
>>>>>>> 9795813feff3f128812ae4c2adb81eca42b3627d
