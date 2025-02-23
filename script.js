
window.onload = function() {
    setTimeout(function() {
        document.getElementById('revealBtn').classList.remove('hidden');
    }, 5000);
};

function revealNext() {
    window.location.href = 'enigmas.html';
}

function showHint(button) {
    var hint = button.nextElementSibling;
    hint.classList.toggle('hidden');
}

function returnToStart() {
    window.location.href = 'index.html';
}
function showEnigma() {
    const enigma = document.getElementById('enigma');
    enigma.classList.remove('hidden');
    enigma.style.opacity = '1';
}
