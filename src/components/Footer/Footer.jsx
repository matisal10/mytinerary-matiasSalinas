import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <nav className='containerIcons'>
                <a href="">
                    <img
                        src={'/assets/Icons-redes/icons8-twitter-48.png'}
                        width={40}
                        style={{ marginRight: '5px' }}
                    />
                </a>
                <a href="">
                    <img
                        src={'assets/Icons-redes/icons8-instagram-48.png'}
                        width={40}
                        style={{ marginRight: '5px' }}
                    />
                </a>
                <a href="">
                    <img
                        src={'/assets/Icons-redes/icons8-youtube-48.png'}
                        width={40}
                        style={{ marginRight: '5px' }}
                    />
                </a>

                <a href="">
                    <img
                        src={'/assets/Icons-redes/icons8-facebook-48.png'}
                        width={40}
                        style={{ marginRight: '5px' }}
                    />
                </a>
            </nav>
            <div>©2023 Matias Salinas</div>
        </footer>
    );
}

export default Footer;
