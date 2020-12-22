const viagens = require('../../app/models/viagens');

viagens = new 
module.exports = (app) => {

    const path = require('path');
    
    app.get('/', (req, resp) => {
        viagens.lista(resp);
        resp.sendFile(path.join(__dirname+'/../../../src/app/index.html'));
    });
}
