import React, { useContext, useState } from 'react';
import { JobsContext } from '../context/JobsContext';
import { useForm } from '../hooks/useForm';

export const SearchBar = () => {
    const { BASE, setSearchUrl, getDataFromApi, setPage } = useContext(JobsContext);

    const [checked, setChecked] = useState(false);

    const [values, handleInputChange] = useForm({
        description: '',
        location: '',
    });

    const { description, location } = values;

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(2);
        const search = description.trim() !== '' ? `description=${description}`.replace(/ /g, '+') : '';
        const where = location.trim() !== '' ? `location=${location}`.replace(/ /g, '+') : '';
        const full_time = checked ? `full_time=true` : '';
        const condition = [search, where, full_time].filter(Boolean).join('&');
        let url;
        if (condition) {
            url = `${BASE}?${condition}`;
            setSearchUrl(url);
            getDataFromApi(url);
        } else {
            url = `${BASE}`;
            setSearchUrl('');
        }
        getDataFromApi(url);
    };

    return (
        <div className='searchbar'>
            <div className='container'>
                <form className='searchbar__filter'>
                    <div className='searchbar__filter-description'>
                        <input
                            type='text'
                            name='description'
                            value={description}
                            placeholder='Filter by title, companies, expertise...'
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className='searchbar__filter-location'>
                        <input
                            type='text'
                            name='location'
                            value={location}
                            placeholder='Filter by location'
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className='searchbar__filter-time'>
                        <div className='content-full-time' onClick={() => setChecked(!checked)}>
                            <span className={`${checked ? 'checked' : ''}`}>
                                <img
                                    style={{ display: `${checked ? 'block' : 'none'}` }}
                                    src={`${process.env.PUBLIC_URL}/images/desktop/icon-check.svg`}
                                    alt='Check'
                                />
                            </span>
                            <small>Full Time Only</small>
                        </div>

                        <button className='btn btn-primary' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
