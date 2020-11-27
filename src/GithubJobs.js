import React, { useEffect, useState } from 'react';
import { JobsContext } from './context/JobsContext';
import { getData } from './helpers/getData';
import { AppRouter } from './routers/AppRouter';

export const GithubJobs = () => {
    const [theme, setTheme] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getData(page)
            .then((response) => {
                setJobs((jobs) => [...jobs, ...response]);
                setLoading(false);
                setError(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }, [page]);

    return (
        <JobsContext.Provider value={{ theme, setTheme, jobs, setJobs, page, setPage, loading, error }}>
            <AppRouter />
        </JobsContext.Provider>
    );
};
