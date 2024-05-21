document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8000/api/items/')
        .then(response => response.json())
        .then(data => {
            const itemList = document.getElementById('item-list');
            data.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('item');
                li.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>Quantidade: ${item.quantity}</p>
                    <p>Preço: $${item.price}</p>
                `;
                itemList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro:', error));
});
