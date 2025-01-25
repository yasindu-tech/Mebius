import cart from './assets/cart.svg';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <>
            <div className="navbar">
    
                <div className="left-section">
                    <a href="#" className="logo">
                        <h1>Mebius</h1>
                    </a>
                    <div className="links">
                        <a href="#">
                            <h5>Home</h5>
                        </a>
                        <a href="#">
                            <h5>Shop</h5>
                        </a>
                    </div>
                </div>

           
                <div className="right-section">
                    <p className="count">{props.count}</p>
                    <img src={cart} alt="Cart Icon" />
                    <h5>Cart</h5>
                    <h5>Hi, {props.name}</h5>
                </div>
            </div>
        </>
    );
}
