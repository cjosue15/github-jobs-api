import React, { useEffect, useState } from 'react';
import { JobsContext } from './context/JobsContext';
import { AppRouter } from './routers/AppRouter';

export const GithubJobs = () => {
    const [theme, setTheme] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchUrl, setSearchUrl] = useState('');
    const [length, setLength] = useState(0);
    const BASE = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

    const getDataFromApi = async (url) => {
        setLoading(true);
        const hasPage = url.search('page');

        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            setJobs((jobs) => (hasPage !== -1 ? [...jobs, ...data] : [...data]));
            setLength(data.length);
            setLoading(false);
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        getDataFromApi(BASE);
    }, []);

    return (
        <JobsContext.Provider
            value={{
                theme,
                setTheme,
                jobs,
                setJobs,
                page,
                setPage,
                setLoading,
                loading,
                error,
                setError,
                BASE,
                searchUrl,
                setSearchUrl,
                getDataFromApi,
                length,
            }}
        >
            <AppRouter />
        </JobsContext.Provider>
    );
};
