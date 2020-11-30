import React, { useContext } from 'react';
import { JobCard } from '../components/JobCard';
import { SearchBar } from '../components/SearchBar';
import { Header } from '../components/Header';
import { JobsContext } from '../context/JobsContext';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';

export const JobScreen = () => {
    // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    // const [scroll, setScroll] = useState(window.pageYOffset);
    const { jobs, length, loading, error, getDataFromApi, BASE, searchUrl, page, setPage } = useContext(JobsContext);

    // useEffect(() => {
    //     function updateScrollHeight() {
    //         setWindowHeight(window.innerHeight);
    //         setScroll(window.pageYOffset);
    //     }
    //     window.addEventListener('scroll', updateScrollHeight);
    //     updateScrollHeight();
    //     return () => window.removeEventListener('scroll', updateScrollHeight);
    // }, [windowHeight, scroll]);

    const handleLoadMore = () => {
        setPage(page + 1);
        const endpoint = searchUrl ? `${searchUrl}&page=${page}` : `${BASE}?page=${page}`;
        getDataFromApi(endpoint);
    };

    return (
        <>
            <Header />
            {!loading && !error && <SearchBar />}
            <section className='job'>
                {loading && page === 2 && <Loader />}
                {!loading && error && <Error />}
                {jobs && !error && (
                    <div className='container'>
                        <div className='job__section'>
                            {jobs.map((item) => (
                                <JobCard key={item.id} {...item} />
                            ))}
                            {loading && page > 2 && <Loader cardLoader={true} />}
                        </div>
                        {!loading && length >= 50 && (
                            <div className='job__loadmore'>
                                <button className='btn btn-primary' onClick={handleLoadMore}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </>
    );
};
