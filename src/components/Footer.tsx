
// import "./Footer.css"
import Wrapper from '../assets/wrappers/Footer';
import footerLogo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';
const footerMenu = [
    {
        id: 1,
        name: 'PRIVACY',
        url: '#'
    },
    {
        id: 2,
        name: 'TERMS',
        url: '/terms'
    },
    {
        id: 3,
        name: 'DMCA',
        url: '#'
    },
    {
        id: 4,
        name: 'SUBMIT VIDEO',
        url: '#'
    }
];
export const Footer = () => {
    return (
        <Wrapper>
            <div className="Footer-Container">
                <footer className="footer-main">
                    <div className="footer-logo">
                        <a href="">
                            <img src={footerLogo} alt="" />
                        </a>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            {footerMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link to={'/terms'}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}
