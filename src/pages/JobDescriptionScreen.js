import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { timeDifference } from '../helpers/timeDifference';

export const JobDescriptionScreen = () => {
    const { id } = useParams();
    const [job, setJob] = useState({ data: {}, error: false, loading: true });
    const colors = ['#8d47ff', '#235cdf', '#daa278', '#68ab97', '#bb4643', '#e7de63'];
    const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

    const { data, error, loading } = job;

    const {
        company,
        company_logo,
        company_url,
        created_at,
        description,
        how_to_apply,
        location,
        title,
        type,
        url: urlCompany,
    } = data;

    console.log(company_url, urlCompany);

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

    const applyNowLink = (link) => {
        const valid = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;
        return link.match(valid)[1];
    };

    const cleanURL = (url) => {
        return (url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]);
    };

    return (
        <>
            <Header />

            <section className='JobDetails'>
                {loading && <Loader />}
                {!loading && error && <Error />}
                {data && !loading && !error && (
                    <>
                        <div className='container'>
                            <div className='JobDetails__content'>
                                <div className='JobDetails__header'>
                                    <div
                                        className='JobDetails__header-logo'
                                        style={{ background: !company_logo && color }}
                                    >
                                        {company_logo ? <img src={company_logo} alt={company} /> : <small>n / a</small>}
                                    </div>
                                    <div className='JobDetails__header-description'>
                                        <div className='title-company'>
                                            <h2>{company}</h2>
                                            {company_url && (
                                                <small className='url-company'>{cleanURL(company_url)}</small>
                                            )}
                                        </div>
                                        {company_url && (
                                            <div className='company-site'>
                                                <a
                                                    className='btn btn-primary'
                                                    href={company_url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Company Site
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='JobDetails__description'>
                                    <div className='JobDetails__description-header'>
                                        <div className='JobDetails__description-title'>
                                            <div className='time'>
                                                <small>{type}</small>
                                                <small>{timeDifference(created_at)}</small>
                                            </div>
                                            <h1>{title}</h1>
                                            <small className='location'>{location}</small>
                                        </div>
                                        <div className='JobDetails__description-apply'>
                                            <a
                                                className='btn btn-primary'
                                                href={applyNowLink(how_to_apply)}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className='JobDetails__description-body'
                                        dangerouslySetInnerHTML={{ __html: description }}
                                    ></div>
                                </div>
                                <div className='JobDetails__cta'>
                                    <h3>How to Apply</h3>
                                    <div
                                        className='JobDetails__cta-body'
                                        dangerouslySetInnerHTML={{ __html: how_to_apply }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <footer className='footer'>
                            <div className='container'>
                                <div className='footer__content'>
                                    <div className='footer__content-title'>
                                        <h4>{title}</h4>
                                        <small>{company}</small>
                                    </div>
                                    <div className='footer__content-apply'>
                                        <a
                                            className='btn btn-primary'
                                            href={applyNowLink(how_to_apply)}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
                )}
            </section>
        </>
    );
};
