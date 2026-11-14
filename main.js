const API_KEY = "3607a75d6c8cb374dd19fe7fbbef345e";

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1')
    .then(response => response.json())
    .then(data => {
        console.log('Top Rated Movies:', data.results.slice(0, 8));
        const topRated = document.getElementById('trending');
        let html = '';
        data.results.slice(0, 8).forEach(movie => {
            html+= `
                <div class="col-md-3">
                    <img class="img-fluid rounded" 
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}" >
                    <p class="text-center mt-2">${movie.title}</p>
                </div>
            `
        });
        topRated.innerHTML = html;
    })
    .catch(error => console.error('Error fetching top rated movies:', error));

fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1')
    .then(response => response.json())
    .then(data => {
        console.log('Popular Movies:', data.results.slice(0, 8));
        const popular = document.getElementById('popular');
        let html = '';
        data.results.slice(0, 8).forEach(movie => {
            html+= `
                <div class="col-md-3">
                    <img class="img-fluid rounded" 
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}" >
                    <p class="text-center mt-2">${movie.title}</p>
                </div>
            `
        });
        popular.innerHTML = html;
    })
    .catch(error => console.error('Error fetching popular movies:', error));
