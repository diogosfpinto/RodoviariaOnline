module.exports = (app) => {

    const path = require('path');
    
    app.get('/', (req, resp) => {
        resp.sendFile(path.join(__dirname+'/../../../src/app/index.html'));
    });
}
