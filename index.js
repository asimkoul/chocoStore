function handleSubmit(event) {
    event.preventDefault();
    let items = {
        name: event.target.name.value,
        chocolate: event.target.chocolate.value,
        qty: event.target.qty.value,
        price: event.target.price.value
    }
    axios.post(`http://localhost:3000/store`, items)
        .then((response) => {
            display(response.data);
            event.target.reset();
        })
        .catch((error) => console.log(error));
}  

function display(item) {
    const userList = document.getElementById("itemList");
    const userItem = document.createElement("li");
    userItem.id = item.id;
    userItem.innerHTML = `${item.name} - ${item.chocolate} - ${item.qty} - ${item.price}
                            <button onclick="buyItem('${item.id}', 1)">Buy 1</button>
                            <button onclick="buyItem('${item.id}', 2)">Buy 2</button>
                            <button onclick="buyItem('${item.id}', 3)">Buy 3</button>`;
    userList.appendChild(userItem);
}

    function buyItem(id, quantity) {
        axios.get(`http://localhost:3000/store/${id}`)
            .then((response) => {
                let item = response.data;
                if (item.qty >= quantity) { 
                    item.qty = item.qty - quantity; 
                    axios.delete(`http://localhost:3000/store/${id}`)
                        .then(() => {
                            const userList = document.getElementById("itemList");
                            const userItem=document.getElementById(item.id)
                            userList.removeChild(userItem)
                            axios.post(`http://localhost:3000/store/`,item)
                            display(item)
                            
                        })
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => console.log(error));
    } 
    document.addEventListener("DOMContentLoaded", () => {
        axios.get(`http://localhost:3000/store`)
            .then((response) => {
                response.data.forEach(item => {
                    display(item);
                });
            })
            .catch((error) => console.log(error));
    });
    