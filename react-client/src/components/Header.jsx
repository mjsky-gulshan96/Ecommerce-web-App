import { useSelector } from "react-redux";
import ecommerceStore from "../store";
import { FaCartArrowDown } from "react-icons/fa";
import "../css/header.css"
import MiniCart from "./MiniCart";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
    const [showMinicart, setshowMinicart] = useState(false);
    const navigate = useNavigate()
    const bagData = useSelector((ecommerceStore) => ecommerceStore.bag)
    // console.log('bagData', bagData);


    return (
        <>
            <nav className="navbar navbar-light bg-secondary ps-3">
                <NavLink className={({ isActive }) => isActive ? "active navbar-brand" : "navbar-brand"}
                    to='/'>Home</NavLink>

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                        </button>
                    </form>
                </div> */}
                <div className="me-5 pb-2" onMouseOver={() => setshowMinicart(true)}
                    onMouseOut={() => setshowMinicart(false)}>
                    <button className="btn btn-light minicart"
                        onClick={() => navigate('/cart')}>
                        <div className="p-1">
                            <FaCartArrowDown style={{ "fontSize": "1.5rem" }} />
                            <span className="bag-count">{bagData.bagCount}</span>
                        </div>
                    </button>
                    <MiniCart showMinicart={showMinicart} />
                </div>
            </nav>
        </>
    );
}

export default Header;
