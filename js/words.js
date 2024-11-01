const wordList = document.getElementById('wordList');
const wordsToFetch = ['javascript', 'programming', 'computer', 'science', 'technology', 'internet', 'network', 'database', 'software', 'hardware', 'algorithm', 'data', 'structure', 'machine', 'learning', 'artificial', 'intelligence', 'cybersecurity', 'encryption', 'decryption', 'authentication', 'authorization', 'access', 'control', 'cloud', 'computing', 'web', 'development', 'design', 'user', 'interface', 'user', 'experience', 'front-end', 'back-end', 'full-stack', 'developer', 'engineer', 'analyst', 'architect', 'manager', 'leader', 'team', 'project', 'product', 'agile', 'scrum', 'kanban', 'lean', 'startup', 'entrepreneur', 'business', 'marketing', 'sales', 'customer', 'service', 'support', 'quality', 'assurance', 'testing', 'automation', 'devops', 'infrastructure', 'operations', 'monitoring', 'logging', 'metrics', 'analytics', 'reporting', 'visualization', 'dashboard', 'chart', 'graph', 'diagram', 'flow', 'sequence', 'model', 'pattern', 'trend', 'forecast', 'prediction', 'optimization', 'efficiency', 'productivity', 'performance', 'scalability', 'reliability', 'security', 'privacy', 'compliance', 'regulation', 'standard', 'framework', 'library', 'package', 'module', 'plugin', 'extension', 'component', 'feature', 'functionality', 'capability', 'requirement', 'specification', 'documentation', 'instruction', 'tutorial', 'guide', 'manual', 'reference', 'resource', 'asset', 'repository', 'version', 'control', 'branch', 'merge', 'conflict', 'commit', 'push', 'pull', 'request', 'issue', 'bug', 'fix', 'feature', 'enhancement', 'refactor', 'rewrite', 'rework', 'rebuild', 'restructure', 'reorganize', 'rearrange', 'reorder', 'reformat', 'realign', 'reposition'];
const numberOfWords = 3; 

for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = Math.floor(Math.random() * wordsToFetch.length);
    const word = wordsToFetch[randomIndex];
    fetchRandomWords(word);
}

function fetchRandomWords(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWord(data, word);
        })
        .catch(error => {
            console.error(`Error fetching random word "${word}":`, error);
        });
}

function displayWord(data, word) {
    const wordObj = data[0]; // Assuming the API returns an array with one object

    const li = document.createElement('li');
    li.textContent = wordObj.word;

    const definition = document.createElement('p');
    definition.classList.add('definition');
    definition.textContent = `Definition: ${wordObj.meanings[0].definitions[0].definition}`;


    li.appendChild(definition);


    wordList.appendChild(li);
}