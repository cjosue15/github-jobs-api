import React, { useContext } from 'react';
import { JobsContext } from '../context/JobsContext';

export const Loader = ({ cardLoader = false }) => {
    console.log(cardLoader);
    const { theme } = useContext(JobsContext);

    return (
        <div className='loader'>
            <img
                style={{ width: cardLoader && '150px' }}
                src={`${process.env.PUBLIC_URL}/images/${theme ? 'github-purple.svg' : 'github-black.svg'}`}
                alt='Loader'
            />
        </div>
    );
};
