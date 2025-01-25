import cart from './assets/cart.svg';
import './Navbar.css';

export default function Navbar() {
    const name = "Yasindu";
    const count = 100;
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
                    <p className="count">{count}</p>
                    <img src={cart} alt="Cart Icon" />
                    <h5>Cart</h5>
                    <h5>Hi, {name}</h5>
                </div>
            </div>
        </>
    );
}
