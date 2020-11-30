import React from 'react';

export const Error = () => {
    return (
        <div className='error'>
            <h2>
                Ups, there is error here!{' '}
                <span role='img' aria-label='Crying Face'>
                    😥
                </span>
                <span role='img' aria-label='Sneezing Face'>
                    🤧
                </span>
            </h2>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/images/unicorn.png`} alt='Error' />
            </figure>
        </div>
    );
};
