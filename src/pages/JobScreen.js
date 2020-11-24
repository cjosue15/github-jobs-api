import React, { useEffect, useState } from 'react';
import { HeaderForm } from '../components/HeaderForm';
import { JobCard } from '../components/JobCard';
import { getData } from '../helpers/getData';

// const Section = styled.section`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     padding: 0 2em;
//     gap: 1em;
// `;

// const Wrapper = styled.div`
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
// `;

export const JobScreen = () => {
    const [jobs, setJobs] = useState({ data: [], loading: true });

    const { data } = jobs;

    useEffect(() => {
        getData().then((response) => {
            setJobs({
                data: response,
                loading: false,
            });
        });
    }, []);

    return (
        <>
            <HeaderForm />
            <section className='job'>
                <div className='container'>
                    <div className='job__section'>
                        {data.map((item) => (
                            <JobCard key={item.id} {...item} />
                        ))}
                    </div>
                    <div className='job-loadmore'>
                        <button>Load More</button>
                    </div>
                </div>
            </section>
        </>
    );
};
