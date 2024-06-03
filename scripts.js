document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-idea-btn').addEventListener('click', function() {
        document.getElementById('idea-panel').classList.remove('hidden');
    });

    document.getElementById('close-panel').addEventListener('click', function() {
        document.getElementById('idea-panel').classList.add('hidden');
    });

    document.getElementById('submit-idea').addEventListener('click', function() {
        let idea = document.getElementById('idea-input').value;
        console.log('Ideia registrada:', idea);
        document.getElementById('idea-input').value = '';
        document.getElementById('idea-panel').classList.add('hidden');
        alert('Sua ideia foi registrada com sucesso!');
    });
});
