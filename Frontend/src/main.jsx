import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router";
import HomePage from "./pages/home.page.jsx";
import SignInPage from "./pages/sign-in-page.jsx";
import SignUpPage from "./pages/sign-up-page.jsx";

import { store } from '@/lib/store.js'
import { Provider } from 'react-redux'

import { ClerkProvider } from "@clerk/clerk-react";
import Navigation from "./Navigation.jsx";
import RootLayout from "./layouts/layout.root.jsx";
import CartPage from "./pages/cart.page.jsx";
import AccountPage from "./pages/account.page.jsx";
import SavedPage from "./pages/saved.page.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <Provider store={store}>
      <BrowserRouter> 
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<HomePage  />} />
            <Route path="/shop/cart" element = {<CartPage/>}/>
            <Route path="/account" element={<AccountPage/>} />
            <Route path="/shop/saved" element={<SavedPage/>} />
          </Route>
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ClerkProvider>
  //</StrictMode>
);
 