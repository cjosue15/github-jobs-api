import React, { useContext, useEffect, useState } from 'react';
import { JobCard } from '../components/JobCard';
import { SearchBar } from '../components/SearchBar';
import { Header } from '../components/Header';
import { JobsContext } from '../context/JobsContext';

export const JobScreen = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [scroll, setScroll] = useState(window.pageYOffset);
    const { jobs, page, setPage, loading, error } = useContext(JobsContext);
    // function useWindowSize() {
    //     useEffect(() => {
    //         function updateScrollHeight() {
    //             setWindowHeight(window.innerHeight);
    //             setScroll(window.pageYOffset);
    //         }
    //         window.addEventListener('scroll', updateScrollHeight);
    //         updateScrollHeight();
    //         return () => window.removeEventListener('scroll', updateScrollHeight);
    //     }, [windowHeight, scroll]);

    //     return scroll, windowHeight;
    // }

    useEffect(() => {
        function updateScrollHeight() {
            setWindowHeight(window.innerHeight);
            setScroll(window.pageYOffset);
        }
        window.addEventListener('scroll', updateScrollHeight);
        updateScrollHeight();
        return () => window.removeEventListener('scroll', updateScrollHeight);
    }, [windowHeight, scroll]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    // useWindowSize();

    return (
        <>
            <Header />
            <SearchBar />
            {loading && page === 1 && <h1>Init Loading</h1>}
            {!loading && error && <h1>Error</h1>}

            {/* {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                <>
                    <section className='job'>
                        <div className='container'>
                            <div className='job__section'>
                                {jobs.map((item) => (
                                    <JobCard key={item.id} {...item} />
                                ))}
                                {loading && page > 1 && <h1>Loading CARD</h1>}
                            </div>
                            <div className='job__loadmore'>
                                <button className='btn btn-primary' onClick={handleLoadMore}>
                                    Load More
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            )} */}

            {jobs && !error && (
                <section className='job'>
                    <div className='container'>
                        <div className='job__section'>
                            {jobs.map((item) => (
                                <JobCard key={item.id} {...item} />
                            ))}
                            {loading && page > 1 && <h1>Loading CARD</h1>}
                        </div>
                        <div className='job__loadmore'>
                            <button className='btn btn-primary' onClick={handleLoadMore}>
                                Load More
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
