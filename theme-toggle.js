// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('light-theme');
    
    // Salvar preferência no localStorage
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    
    // Atualizar texto do botão
    updateButtonText();
}

// Função para aplicar tema salvo
function applyTheme(theme) {
    const body = document.body;
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
    updateButtonText();
}

// Atualizar texto do botão
function updateButtonText() {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        const isLight = document.body.classList.contains('light-theme');
        btn.textContent = isLight ? '⏾' : '☀ ';
    }
}

// Aplicar tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
});
