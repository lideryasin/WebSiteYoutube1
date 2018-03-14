import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {

    constructor(){
        super();

        this.state = {
            isNavOpen: false
        }
    }
    
    btnClick(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">Egitim Budur</a>
                    <button className="navbar-toggler" type="button" onClick={this.btnClick.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link to="/" activeClassName="active" className="nav-link" href="">Ana Sayfa</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/hakkimizda" activeClassName="active" className="nav-link" href="">Hakımızda</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/iletisim" activeClassName="active" className="nav-link" href="">İletişim</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        )

    }
}

export default Header;