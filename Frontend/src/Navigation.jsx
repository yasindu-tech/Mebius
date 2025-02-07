import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { ShoppingCart,Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Navigation() {
  
const savedItems = useSelector((state) => state.savedItems.value)
  const cart = useSelector((state)=> state.cart.value)

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) =>{
      count+= item.quantity;
    })

    console.log(count)
    return count;
  };

  const getSavedItemsQuantity =() =>{
    let count = 0;
    savedItems.forEach((item) =>{
      count+=1;
    })

    return count
  }

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
          <Link to="/shop/saved" className="flex items-center gap-4 relative">
            <p className="text-lg">{getSavedItemsQuantity()}</p>
            <div className="flex items-center gap-2">
              <Heart></Heart>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/shop/cart" className="flex items-center gap-4 relative">
            <p className="text-lg">{getCartQuantity()}</p>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Cart
            </div>
          </Link>
        </div>

        <SignedOut>
           <div>
              <a href="/signin">Sign in</a>
              <a href="/signup" className="pl-3">
                Sign up
              </a>
            </div>
        </SignedOut>

        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navigation;
