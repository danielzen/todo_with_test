//server code
import express from 'express';

// import bodyParser from 'body-parser';

let app = express();

let PORT = 3000;

// app.use(bodyParser.text({type: 'application/graphql'}))
app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log(__dirname + '/../index.html');
	res.sendFile(__dirname + '/index.html');
})

let server = app.listen(PORT, () => {
	console.log('listening at ' + PORT);
})