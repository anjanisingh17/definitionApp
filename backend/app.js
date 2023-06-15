const express = require('express');
const path = require('path')


const app = express();
app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

console.log('__dirname>>>',__dirname)


// console.log(path.join(__dirname, '../src/views'))

app.set('views', path.join(__dirname, './src/viewsFolder'));
app.set('view engine','ejs')

// app.set('views', path.join(__dirname, '/views'));



app.get('/',(req,res)=>{
    // res.send('Hello Testing')
    res.render('templates/index')
})




app.listen(8080,(err)=>{

    if(err) throw err;
    console.log('server is running 8080')
})



