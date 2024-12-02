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

    const GetProductIds = function (products) {
        return products.map(product => product.id);
    }

    const GetProductRatings = function (products) {
        return products.map(product => product.averagerating);
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

const validateFields = function () {
    const requiredFields = document.querySelectorAll('.input-validation, .input-validation-radio');
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.checkValidity()) {
                field.parentElement.style.borderLeftColor = 'green';
            } else {
                field.parentElement.style.borderLeftColor = 'red';
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect();
    validateFields();
});