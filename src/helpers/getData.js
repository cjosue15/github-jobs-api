export const getData = async (page = 1) => {
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`
    );
    const data = response.json();

    return data;
};
