
// import "./Header.css"
import Wrapper from '../assets/wrappers/Header';
import logo from '../assets/images/Logo.png';
import logoProfile from '../assets/images/icon_profile.png';
import iconFacebook from '../assets/images/icon_facebook.svg';
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
const menu = [
    // {
    //     id: 1,
    //     name: 'distro',
    //     url: '#'
    // },
    {
        id: 2,
        name: 'contact',
        url: '#'
    },
    {
        id: 3,
        name: 'advertise',
        url: '#'
    }
];
const socialIcon = [
    {
        id: 1,
        name: 'facebook',
        url: '#',
        svg: iconFacebook,
    },
    {
        id: 2,
        name: 'facebook',
        url: '#',
        svg: iconFacebook,
    },
    {
        id: 3,
        name: 'facebook',
        url: '#',
        svg: iconFacebook,
    },
    {
        id: 4,
        name: 'facebook',
        url: '#',
        svg: iconFacebook,
    },
    {
        id: 5,
        name: 'facebook',
        url: '#',
        svg: iconFacebook,
    }
];
export const Header = () => {
    return (
        <Wrapper>
            <div className="App-header">
                <nav className="navbar">
                    <div className="header-left">
                        <div className="nav-logo">
                            <NavLink to="/">
                                <img src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="nav-menu">
                            <ul>
                                {menu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.url}>{item.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="nav-serach">
                            <SearchInput />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="nav-user">
                            <a href="#">
                                <img src={logoProfile} alt="" />
                            </a>
                        </div>
                        <div className="nav-social">
                            <ul>
                                {
                                    socialIcon.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.url}>
                                                    <img src={item.svg} alt={item.name} />
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Wrapper>
    )
}


