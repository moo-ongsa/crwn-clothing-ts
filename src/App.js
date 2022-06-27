import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom';


import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action'

import { GlobalStyle } from './global.styles'

const Home = lazy(() => import('./routes/home/hompage.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./routes/sign-in-and-sign-up/sign-in-and-sign-up.components'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  });

  return (
    <Suspense fallback={<Spinner />}>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route path='/' element={<Home />} />
            <Route path='/shop/*' element={<Shop />} />
            <Route path='/signin' element={<SignInAndSignUp />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
