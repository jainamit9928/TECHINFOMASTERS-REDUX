export const getData = () => (
    new Promise(function(resolve, reject) {
        fetch('http://localhost:3000/items').then((response) => response.json()).then((res) => {
            const techies = res.techies
            setTimeout(() => resolve(techies), 500)
        }).catch((error) => {
            reject(error);
        });
    })
)

export const getFilteredData = (id) => (
    new Promise(function(resolve, reject) {
        fetch('http://localhost:3000/items/' + id).then((response) => response.json()).then((res) => {
            const techies = res.data
            setTimeout(() => resolve(techies), 500)
        }).catch((error) => {
            reject(error);
        });
    })
)

export const updateData = (id, updatedObject) => (
    new Promise(function(resolve, reject) {
        fetch('http://localhost:3000/items/' + id, {
            method: 'put',
            body: JSON.stringify(updatedObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response).then((response) => setTimeout(() => resolve(response.json()), 500)).catch((error) => {
            reject(error);
        })
    })
)
