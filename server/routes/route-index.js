const viagens = require('../models/viagens');

module.exports = (app) => {

    const path = require('path');
    
    app.get('/', (req, resp) => {
        resp.render("index");
    });

    app.get('/lista', (req, resp) => {
        viagens.lista(resp);
    });
}
