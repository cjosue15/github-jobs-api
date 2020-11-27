import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='header__logo'>
                        <Link to='/'>
                            <img src={`${process.env.PUBLIC_URL}/images/desktop/logo.svg`} alt='Logo' />
                        </Link>

                        <div
                            className={`header__theme ${active ? 'active' : ''}`}
                            onClick={() => {
                                setActive(!active);
                            }}
                        >
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
