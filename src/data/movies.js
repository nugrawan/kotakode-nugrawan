export async function getData(url) {
    const movies = [];
    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUxYjA5ODgwNzljYTU5NGNhMzQ5MzZmYmEzNTdlYSIsInN1YiI6IjY2NTI5NWZmYTUwOTBmMzMwMjA3YTZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVfFoQadTn8PwkWjz4xFyawyuRT2CBk6NBJJBqFAzOI'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        movies.push(...json.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return movies;
}
