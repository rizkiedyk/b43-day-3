function getData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name == '') {
        alert('Nama harus diisi !');
    } else if (email == '') {
        alert('Email harus diisi !');
    } else if (phoneNumber == '') {
        alert('Nomor telepon harus diisi !');
    } else if (subject == '') {
        alert('Anda harus memilih !');
    } else if (message == '') {
        alert('Pesan tidak boleh kosong');
    }

    let emailReceiver = 'akugantengcuy@gmail.com';

    let mailTo = document.createElement('a');
    mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name} , ${message} , ini nomor telepon saya ${phoneNumber}`;
    mailTo.click();

    let user = {
        myName: name,
        myEmail: email,
        myPhone: phoneNumber,
        mySubject: subject,
        myMessage: message
    }

    console.log(user);
}