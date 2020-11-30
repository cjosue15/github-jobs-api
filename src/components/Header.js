import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JobsContext } from '../context/JobsContext';

export const Header = () => {
    const { theme, setTheme } = useContext(JobsContext);
    const body = document.body.classList;

    useEffect(() => {
        const textTheme = localStorage.getItem('theme');
        if (textTheme === 'dark') {
            setTheme(true);
            body.add('dark');
        } else {
            setTheme(false);
            body.remove('dark');
        }
    }, [theme, body, setTheme]);

    const switchTheme = () => {
        if (!theme) {
            localStorage.setItem('theme', 'dark');
            setTheme(true);
        } else {
            localStorage.setItem('theme', 'light');
            setTheme(false);
        }
    };

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='header__logo'>
                        <Link to='/'>
                            <img src={`${process.env.PUBLIC_URL}/images/desktop/logo.svg`} alt='Logo' />
                        </Link>

                        <div className={`header__theme ${theme ? 'active' : ''}`} onClick={switchTheme}>
                            <span>
                                <img src={`${process.env.PUBLIC_URL}/images/desktop/icon-sun.svg`} alt='Sun' />
                            </span>
                            <button>
                                <i className='header__theme-slider'></i>
                            </button>
                            <span>
                                <img src={`${process.env.PUBLIC_URL}/images/desktop/icon-moon.svg`} alt='Moon' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
