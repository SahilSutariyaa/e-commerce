import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KidsLayout from "./layout/KidsLayout";
import Layout from "./layout/Layout";
import MenLayout from "./layout/MenLayout";
import WomenLayout from "./layout/WomenLayout";
import DetailPage from "./pages/DetailPage";
import Kids from "./pages/Kids";
import ListPage from "./pages/ListPage";
import Men from "./pages/men/Men";
import Women from "./pages/Women";
import MenSerchData from "./pages/MenSerchData";
import WomenSearchData from "./pages/WomenSearchData";
import KidsSearchData from "./pages/KidsSearchData";
import { Provider } from "react-redux";
import store from "./redux/store";
import WishList from "./pages/WishList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCart from "./pages/AddToCart";
// import PaymentDetails from "./pages/PaymentDetails";
import Payment from "./pages/Payment";


function App() {

  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route
              path="/"
              element={

                <MenLayout />

              }
            >
              <Route index element={ <Men /> } />
              <Route path=":id" element={ <ListPage /> } />
              <Route path=":id/:product/:productId" element={ <DetailPage /> } />
              <Route path="/search" element={ <MenSerchData /> } />
            </Route>
            <Route
              path="women"
              element={

                <WomenLayout />

              }
            >
              <Route index element={ <Women /> } />
              <Route path=":id" element={ <ListPage /> } />
              <Route path=":id/:product/:productId" element={ <DetailPage /> } />
              <Route path="/women/search" element={ <WomenSearchData /> } />
            </Route>
            <Route
              path="kids"
              element={

                <KidsLayout />

              }
            >
              <Route index element={ <Kids /> } />
              <Route path=":id" element={ <ListPage /> } />
              <Route path=":id/:product/:productId" element={ <DetailPage /> } />
              <Route path="/kids/search" element={ <KidsSearchData /> } />
            </Route>

            <Route path="wishList" element={ <WishList /> } />
            <Route path="addToCard" element={ <AddToCart /> } />
            <Route path="paymentDetails" element={ <Payment /> } />
          </Route>
          {/* <Route path="search" element={ <Search /> } /> */ }
        </Routes>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
