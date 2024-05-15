const express = require('express');
const app = express();
const port = process.env.port || 5000;

const expressHbs = require('express-handlebars');
const { createPagination } = require('express-handlebars-paginate');

app.use(express.static(__dirname + '/html'));

app.engine(
    'hbs',
    expressHbs.engine(
        {
            extname: 'hbs',
            defaultLayout: "layout",
            layoutsDir: __dirname + '/views/layouts/',
            partialsDir: __dirname + '/views/partials/',
            runtimeOptions: {  
                allowProtoPropertiesByDefault: true
            },
            helpers: { 
                createPagination: createPagination
            }

        }
    )
)
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.redirect('/blogs');
});
app.use('/blogs', require('./routes/blogRoute'));


app.use((err, req, res, next) =>{
    console.log(err);
    res.status(500).render('error',{message : 'Server error!'});
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});