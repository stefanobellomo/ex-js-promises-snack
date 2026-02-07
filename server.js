// SNACK 1

const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    })
    return promessa
}

getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error));

// SNACK 1 BONUS

function getPost(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => {
                        post.user = user
                        resolve(post)
                    })
                    .catch(reject)
            })
            .catch(reject)
    })
    return promessa
}

getPost(1)
    .then(result => console.log(result))
    .catch(error => console.error(error));


// SNACK 2

const creaLanciaDado = () => {

    let ultimoLancio = null

    return function () {
        return new Promise((resolve, reject) => {
            const incastro = Math.random()
            setTimeout(() => {
                if (incastro < 0.2) {
                    reject("il dado si è incastrato")
                    return;
                } else {
                    const rndNumb = Math.floor(Math.random() * 6) + 1
                    if (rndNumb === ultimoLancio) {
                        console.log('bravo');
                    }
                    ultimoLancio = rndNumb
                    resolve(rndNumb)
                }
            }, 2000)
        })
    }
}

const memoriaRisultati = creaLanciaDado();

memoriaRisultati()
    .then(rndNumb => {
        memoriaRisultati()
            .then(rndNumb => console.log(rndNumb))
            .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
