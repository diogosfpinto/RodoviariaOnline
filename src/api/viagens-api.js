const listarViagens = () => {
    return fetch('http://localhost:3000/lista')
    .then(resposta => {
        return resposta.json();
    })
    .then( json => {
        return json;
    });
}