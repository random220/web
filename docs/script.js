document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const name = event.target.value;
        const responseDiv = document.getElementById('response');
        responseDiv.textContent = `Nice to meet you ${name}!`;
        responseDiv.classList.remove('hidden');
        event.target.parentElement.classList.add('hidden');
    }
});
