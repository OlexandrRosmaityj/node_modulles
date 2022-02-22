const express = require('express');
const {engine} = require('express-handlebars');
const path =require('path');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static')));

app.set('view engine','.hbs');
app.engine('.hbs', engine({defaultLayout:false}));
app.set('views', path.join(__dirname, 'static'));

const users =[];
let eror = '';


app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',({body},res)=>{
   const userExist = users.some(user => user.email === body.email)
    if(userExist){
        eror = "user with this email exist"
         res.redirect('/eror');
        return;
    }
    console.log(body)
    users.push({...body, id:users.length ? users[users.length-1].id+1:1});
    res.redirect('/users');
});

app.get('/users',(req,res)=>{
    res.render('users', {users});
});


app.listen(5200, () => {
    console.log('servak has started!!!')
})

