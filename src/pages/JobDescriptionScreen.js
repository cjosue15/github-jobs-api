import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';

export const JobDescriptionScreen = () => {
    const { id } = useParams();
    const [job, setJob] = useState({ data: {}, error: false, loading: true });

    const { data, error, loading } = job;

    const getJob = async (id) => {
        const response = await fetch(
            `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
        );
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        getJob(id)
            .then((response) => {
                setJob({ data: response, error: false, loading: false });
            })
            .catch((error) => {
                setJob({ data: {}, error: true, loading: false });
            });
    }, [id]);

    return (
        <>
            <Header />
            {loading && !error ? <h1>Loading...</h1> : JSON.stringify(data)}
        </>
    );
};
