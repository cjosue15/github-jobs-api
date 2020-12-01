import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { timeDifference } from '../helpers/timeDifference';

export const JobCard = ({ id, company, company_logo, created_at, location, title, type }) => {
    const colors = ['#8d47ff', '#235cdf', '#daa278', '#68ab97', '#bb4643', '#e7de63'];
    const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

    return (
        <Link to={`/${id}`} className='card__content'>
            {company_logo ? (
                <div className='card__content-image'>
                    <img src={company_logo} alt={company} />
                </div>
            ) : (
                <div className='card__content-image' style={{ background: color }}>
                    <div>
                        <small>n / a</small>
                    </div>
                </div>
            )}

            <div className='card__content-time time'>
                <small>{type}</small>
                <small>{timeDifference(created_at)}</small>
            </div>
            <h3 className='card__content-title'>{title}</h3>
            <p className='card__content-company'>{company}</p>
            <small className='card__content-location'>{location}</small>
        </Link>
    );
};
