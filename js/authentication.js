// Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');
var erro = document.getElementById('erro');

// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Displays
var displayName = document.getElementById('displayName');

createUserButton.addEventListener('click', function() {
    firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function(result) {
            console.log(result);
            alert('Bem Vindo ' + emailInput.value);
        })
        .catch(function(error) {
            if(error.code = 'auth/email-already-in-use') {
                erro.innerText = 'Este email já está sendo usado';
            }
        });
});

authEmailPassButton.addEventListener('click', function() {
    firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem vindo, ' + emailInput.value;
            erro.innerText = '';
        })
        .catch(function(error) {
            erro.innerText = 'A senha é inválida ou o usuário não tem uma senha';
        });
});

logOutButton.addEventListener('click', function() {
    firebase.auth().signOut()
        .then(function(result) {
            displayName.innerText = 'Você não está autenticado';
            emailInput.value = '';
            passwordInput.value = '';
        }, function(error) {
            console.log(error);
        });
});

authGoogleButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo ' + result.user.displayName;
        }).catch(function(error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}

authAnonymouslyButton.addEventListener('click', function() {
    alert('Ainda não implementado');
});

authGitHubButton.addEventListener('click', function() {
    alert('Ainda não implementado');
});

authTwitterButton.addEventListener('click', function() {
    alert('Ainda não implementado');
});

authFacebookButton.addEventListener('click', function() {
    alert('Ainda não implementado');
});