const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').querySelector('tbody');
const newProductButton = document.getElementById('newProductButton');
const listProductsButton = document.getElementById('listProductsButton');

const products = [];
let canRegister = false;

productForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!canRegister) {
        alert('Clique no botão "Cadastrar Novo Produto" antes de cadastrar.');
        return;
    }

    const productName = document.getElementById('productName').value;
    const productValue = parseFloat(document.getElementById('productValue').value);

    if (!productName || isNaN(productValue) || productValue <= 0) {
        alert('Por favor, insira todos os campos corretamente.');
        return;
    }

    products.push({
        name: productName,
        value: productValue
    });

    products.sort((a, b) => a.value - b.value);

    renderTable();

    productForm.reset();
    canRegister = false;
});

function renderTable() {
    productTable.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const valueCell = document.createElement('td');

        nameCell.textContent = product.name;
        valueCell.textContent = product.value.toFixed(2);

        row.appendChild(nameCell);
        row.appendChild(valueCell);
        productTable.appendChild(row);
    });
}

newProductButton.addEventListener('click', function() {
    canRegister = true;
    productForm.scrollIntoView({ behavior: 'smooth' });
});

listProductsButton.addEventListener('click', function() {
    renderTable();
    productTable.parentElement.scrollIntoView({ behavior: 'smooth' });
});
