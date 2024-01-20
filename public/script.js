let currentPage = 1;
const repositoriesList = document.getElementById('repositories-list');
const loader = document.getElementById('loader');
const currentPageElement = document.getElementById('currentPage');

async function fetchRepositories() {
    const username = document.getElementById('username').value;
    
    try {
        loader.style.display = 'block'; // show loader while fetching

        // Using the Fetch API instead of Axios
        const response = await fetch(`/api/repositories/${username}?page=${currentPage}`);
        const { repositories, totalPages } = await response.json();

        repositoriesList.innerHTML = '';

        repositories.forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.innerHTML = `
                <h3><a href="${repo.url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || 'No description available.'}</p>
                <p>Topics: ${repo.topics.join(', ')}</p>
            `;
            repositoriesList.appendChild(repoElement);
        });

        currentPageElement.innerText = currentPage;
        updatePagination(totalPages);
    } catch (error) {
        repositoriesList.innerHTML = '<p>Error fetching repositories. Please try again later.</p>';
    } finally {
        loader.style.display = 'none'; // hide loader after fetching
    }
}

function updatePagination(totalPages) {
    const prevButton = document.querySelector('.pagination button:first-child');
    const nextButton = document.querySelector('.pagination button:last-child');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

function nextPage() {
    currentPage++;
    fetchRepositories();
}

function prevPage() {
    currentPage--;
    fetchRepositories();
}
