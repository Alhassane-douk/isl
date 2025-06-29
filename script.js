function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function applyAI() {
  const inputText = document.getElementById('textInput').value;

  // Exemple simple : simulateur d'IA
  const transformed = "🔬 [Style scientifique]: " + inputText.toUpperCase();

  document.getElementById('output').innerText = transformed;
}
