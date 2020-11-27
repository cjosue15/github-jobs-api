import React from 'react';
import { Link } from 'react-router-dom';

export const JobCard = ({ id, company, company_logo, created_at, location, title, type }) => {
    return (
        <Link to={`/${id}`} className='card__content'>
            <div className='card__content-image'>
                {company_logo ? (
                    <img src={company_logo} alt={company} />
                ) : (
                    <div>
                        <small>n / a</small>
                    </div>
                )}
            </div>
            <div className='card__content-time'>
                <small>{type}</small>
            </div>
            <h3 className='card__content-title'>{title}</h3>
            <p className='card__content-company'>{company}</p>
            <small className='card__content-location'>{location}</small>
        </Link>
    );
};
