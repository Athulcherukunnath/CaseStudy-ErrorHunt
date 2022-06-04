const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
//part#1 part spelling mistake in homerouter
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const bodyParser = require('body-parser');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.json());
// part #1 point 3 ,above is not in there
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");
    //part# 1 point 5, error in 3000 instead of 5000
});