function enviarContato(event) {
    event.preventDefault();
    const url = 'https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact';

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const data = {
        names: [
            formData.get('name1'),
            formData.get('name2'),
            formData.get('name3'),
            formData.get('name4')
        ],
        message: formData.get('message')
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Problemas com a requisição');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}