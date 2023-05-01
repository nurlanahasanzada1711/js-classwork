let inputName = document.querySelector(".inputName");
let inputTitle = document.querySelector(".inputTitle");
let inputCountry = document.querySelector(".inputCountry");
let submit = document.querySelector(".submit");

const API_URL = 'https://northwind.vercel.app/api/suppliers';

const postSuplier = async (suplier) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-TYPE': 'application/json'
        },
        body: JSON.stringify(suplier)
    })
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const suplier = {
        contactName: inputName.value,
        contactName: inputTitle.value,
        address: {
            country: inputCountry.value
        }

    }

    Swal.fire({
        title: 'add is success!',
    })
    inputName.value = "";
    inputTitle.value = "";
    inputCountry.value = "";

    postSuplier (suplier);
})