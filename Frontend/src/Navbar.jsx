import cart  from './assets/cart.svg'

export default function Navabr(props){
    return (
        <nav className="flex items-center justify-between p-8 mx-16">
          <div className="flex gap-x-16">
            <a className="font-semibold text-3xl" href="/">
              Mebius
            </a>
            <div className="flex items-center gap-4">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <a href="/cart" className="flex items-center gap-4 relative">
                <p className="text-lg">{props.count}</p>
                <div className="flex items-center gap-2">
                    <img src={cart} alt="cart" className="w-6 h-6"/>
                  Cart
                </div>
              </a>
            </div>
            {props.name === undefined ? (
                <div>
                    <a href="/signin">Login</a>
                    <a href="/signup" className='pl-3'>Signup</a>
                </div>
              ) : (<p>Hi, {props.name}</p>)}
            
          </div>
        </nav>
      );
}


