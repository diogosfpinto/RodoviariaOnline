const app = require('./src/config/customExpress');

const path = require('path');

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname+'/src/app/index.html'));
});

app.listen(3000, () => {console.log('Servidor rodando na porta 3000.')});
