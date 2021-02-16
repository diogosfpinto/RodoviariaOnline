const ViagensDao = require('../infraestrutura/ViagensDao');

const daoViagem = new ViagensDao();

module.exports = (app) => {

    const path = require('path');
    
    app.get('/', (req, resp) => {
        resp.render("index");
    });

    app.get('/lista', (req, resp) => {
        daoViagem.lista(resp);
    });
}
