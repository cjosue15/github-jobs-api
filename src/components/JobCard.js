import React from 'react';

export const JobCard = ({ company, company_logo, created_at, location, title, type }) => {
    return (
        <div className='card__content'>
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
        </div>
    );
};
