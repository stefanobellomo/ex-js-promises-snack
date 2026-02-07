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

