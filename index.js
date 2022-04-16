const express = require('express');
const cors = require('cors');
const app = express();
const path = ([
    'index', 'login', 'list-wisata', 'tambah-wisata', 'list-pengguna', 'tambah-pengguna',
]);

app.engine('html', require('ejs').renderFile);

const corsOptions = {
    origin: 'https://api.fahmifa.my.id',
}

app.get('/', cors(corsOptions), (req, res) => {
    res.render(__dirname + '/dist/index.html');
});

app.use('/assets', express.static('dist/assets/'));

for (var i = 0; i < path.length; i++) {
    app.get('/' + path[i] + '.html', cors(corsOptions), (req, res) => {
        console.log(__dirname + '/dist/' + req.route.path.substring(1));
        return res.render(__dirname + '/dist/' + req.route.path.substring(1));
    });
}

app.listen(80, () => {
    console.log('Server berjalan pada http://localhost:80')
})