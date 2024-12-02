const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const GetProductNames = function (products) {
    return products.map(product => product.name);
}

const populateProductSelect = function () {
    const productSelect = document.getElementById('productSelect');
    const productNames = GetProductNames(products);
    productNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        productSelect.appendChild(option);
    });
};

const incrementReviewCounter = function (event) {
    event.preventDefault();
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
    window.location.href = 'review.html';
};

document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect();
    document.querySelector('form').addEventListener('submit', incrementReviewCounter);
});