let mail = prompt('Please, enter your e-mail', '');
let pass;
let passTmp;
const lengthEmail = 6;
const lengthPass = 5;
if (!mail) {
    alert('Canceled');
} else if (mail.length < lengthEmail) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    pass = prompt('Please, enter your password')
    if (!pass) {
        alert('Canceled')
    } else if (mail === 'user@gmail.com' && pass === 'UserPass' || mail === 'admin@gmail.com' && pass === 'AdminPass') {
        passTmp = confirm('Do you want to change your password?');
        if (!passTmp) {
            alert('You have failed the change.')
        } else {
            pass = prompt('Write old password', '');
            if (mail === 'user@gmail.com' && pass === 'UserPass' ||
                mail === 'admin@gmail.com' && pass === 'AdminPass') {
                passTmp = prompt('Write new password');
                if (passTmp.length < lengthPass) {
                    alert('It’s too short password. Sorry!');
                } else {
                    pass = prompt('Please, enter new password again');
                    if (passTmp === pass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}
