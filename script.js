let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titileEl = document.createElement("a");
    titileEl.href = link;
    titileEl.target = "_blank";
    titileEl.textContent = title;
    titileEl.classList.add("result-title");
    resultItemEl.appendChild(titileEl);

    let titilBreakEl = document.createElement("br");
    resultItemEl.appendChild(titilBreakEl);

    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("result-description");
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnnerEl.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === 'Enter') {
        spinnnerEl.classList.remove('d-none');
        searchResultsEl.textContent = '';

        let searchInput = searchInputEl.value;
        let url = 'https://apis.ccbp.in/wiki-search?search=' + searchInput;

        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                displayResults(jsonData.search_results);
            });
    }
}

searchInputEl.addEventListener('keydown', searchWikipedia);