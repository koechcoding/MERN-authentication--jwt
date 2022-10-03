import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

class Header extends Component{
    render(){
     retur(
        <header className='header'>
            <Link to="/"><h1 className="title">Sadfa Auth app</h1></Link>
        </header>
        );
    }
}
export default Header;