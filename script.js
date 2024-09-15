document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const flowers = document.querySelectorAll('.flor');

    // Função de busca
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        flowers.forEach(flor => {
            const florName = flor.querySelector('h2').textContent.toLowerCase();
            if (florName.includes(query)) {
                flor.style.display = 'block';
            } else {
                flor.style.display = 'none';
            }
        });
    });

    // Função de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            flowers.forEach(flor => {
                if (filter === 'all' || flor.classList.contains(filter)) {
                    flor.style.display = 'block';
                } else {
                    flor.style.display = 'none';
                }
            });
        });
    });
});
