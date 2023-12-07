import Cart from "./components/CustomerComp/Cart.js";
import CustomerRegistration from "./components/CustomerComp/CustomerRegistration.js";
import ForgotPassword from "./components/CustomerComp/ForgotPassword.js";
import CustomerLogin from "./components/CustomerComp/CustomerLogin.js";
import DistributorHome from "./components/DistributorComponent/DistributorHome.js";
import { Home } from "./components/HomeComponent/Home";
import ProductDetails from "./components/ProductDetails.js";
import ProductsByCat from "./components/HomeComponent/ProductsByCat.js";
import SearchResults from "./components/SearchBarComponents/SearchResults.jsx";
import Expert from './components/ExpertComponent/Expert.js'
import ExpertHome from "./components/ExpertComponent/ExpertHome.js";
import ExpertRegistration from "./components/ExpertComponent/ExpertRegistration.js";
import ExpertDetails from "./components/ExpertComponent/ExpertDetails.js";
import MakeRequest from "./components/CustomerComp/MakeRequest.js";
import DistributorLogin from "./components/DistributorComponent/DistributorLogin.js";
import DistributorRegistration from "./components/DistributorComponent/DistributorRegistration.js";
import OrderHistory from "./components/CustomerComp/OrderHistory.js";
import DeliveryAddressPage from "./components/CustomerComp/DeliveryAddressPage.js";
import Payment from "./components/CustomerComp/Payment.js";
import BuyNow from "./components/CustomerComp/BuyNow.js";
import AdminLogin from "./components/AdminComponent/AdminLogin.js"
import AdminDashBoard from "./components/AdminComponent/AdminDashBoard.js"
import ForgotPasswordDis from "./components/DistributorComponent/ForgotPasswordDis.js";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/expert',
    element: <Expert></Expert>
  },
  {
    path: '/customerlogin',
    element: <CustomerLogin></CustomerLogin>
  },
  {
    path: '/products/:pid',
    element: <ProductDetails></ProductDetails>
  },
  {
    path: '/experts/:expid',
    element: <ExpertDetails></ExpertDetails>
  },
  {
    path: '/category-products/:catid',
    element: <ProductsByCat></ProductsByCat>
  },
  {
    path: '/customer-registration',
    element: <CustomerRegistration></CustomerRegistration>
  },
  {
    path: '/forgot-password/:email',
    element: <ForgotPassword></ForgotPassword>
  },
  {
    path: '/forgot-password/:email',
    element: <ForgotPassword></ForgotPassword>
  },
  {
    path: '/searchresult/:input',
    element: <SearchResults></SearchResults>
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  },
  {
    path: '/distributor-login',
    element: <DistributorLogin></DistributorLogin>
  },
  {
    path: '/my-experts/:custid',
    element: <ExpertHome></ExpertHome>
  },
  {
    path: '/add-expert/:custid',
    element: <ExpertRegistration></ExpertRegistration>
  },
  {
    path: '/make-req/:expid',
    element: <MakeRequest></MakeRequest>
  },
  {
    path: '/distributor-home',
    element: <DistributorHome></DistributorHome>
  },
  {
    path: '/distibutor-registration',
    element: <DistributorRegistration></DistributorRegistration>
  },
  
  {
    path: '/order/history',
    element: <OrderHistory></OrderHistory>
  },
  {
    path: '/buy/product/cart/deliveryaddr/:custid',
    element: <DeliveryAddressPage></DeliveryAddressPage>
  },
  {
    path: '/payment',
    element: <Payment></Payment>
  },
  {
    path: '/buy/now/:proid',
    element : <BuyNow></BuyNow>
  },
  {
    path: '/adminlogin',
    element : <AdminLogin></AdminLogin>
  },
  {
    path: '/admindashbord',
    element : <AdminDashBoard></AdminDashBoard>
  },
  {
    path: '/forgot/password/dis/:email',
    elsment : <ForgotPasswordDis></ForgotPasswordDis>
  }
 
];

export default AppRoutes;
