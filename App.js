import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FAQ from './src/screens/Others/FAQ'
import API from './src/screens/Others/API';
import ChatScreen from './src/screens/Others/ChatScreen';
import Chatting from './src/screens/Others/Chatting';
import ClientMedicine from './src/screens/Others/ClientMedicine';
import ClientOrderHistory from './src/screens/Others/ClientOrderHistory';
import Delivery from './src/screens/Others/Delivery';
import DeliveryPreference from './src/screens/Others/DeliveryPreference';
import DriverMedicine from './src/screens/Others/DriverMedicine';
import FormScreen from './src/screens/Others/FormScreen';
import HelpScreen from './src/screens/Others/HelpScreen';
import HomeScreen from './src/screens/Others/HomeScreen';
import OrderScreen from './src/screens/Others/OrderScreen';
import Popup from './src/screens/Others/Popup';
import Time from './src/screens/Others/Time';
import Login from './src/screens/CarBN/Login';
import MyProfile from './src/screens/CarBN/MyProfile';
import EditScreen from './src/screens/CarBN/EditScreen';
import Contact from './src/screens/CarBN/Contact';
import TandC from './src/screens/CarBN/TandC';
import PrivacyPolicy from './src/screens/CarBN/PrivacyPolicy';
import AuctionLiveBidding from './src/screens/CarBN/AuctionLiveBidding';
import HomePage from './src/screens/CarBN/HomePage';
import Payments from './src/screens/CarBN/Payments';
import Notifications from './src/screens/CarBN/Notifications';
import SavedCar from './src/screens/CarBN/SavedCar';
import RentalCar from './src/screens/CarBN/RentalCar';
import Calculator from './src/screens/CarBN/Calulator';
import AuctionLive from './src/screens/CarBN/AuctionLive';
import OldCar from './src/screens/CarBN/OldCar';
import NewCar from './src/screens/CarBN/NewCar';
import Search from './src/screens/CarBN/Search';

const Navigation = createStackNavigator(
  {
        Home: HomeScreen,
        Order: OrderScreen,
        Form: FormScreen,
        Help: HelpScreen,
        Time: Time,
        Delivery: Delivery,
        Driver: DriverMedicine,
        Client: ClientMedicine,
        Delivery2: DeliveryPreference,
        Popup: Popup,
        Client2: ClientOrderHistory,
        Chat: ChatScreen,
        Chat2: Chatting,
        Api: API,
        Faq: FAQ,
        Login: Login,
        Profile: MyProfile,
        Edit: EditScreen,
        Contact: Contact,
        TandC: TandC,
        Privacy: PrivacyPolicy,
        Bidding: AuctionLiveBidding,
        HomePage: HomePage,
        Payments: Payments,
        Notifications: Notifications,
        car1: SavedCar,
        car2: RentalCar,
        Calculator: Calculator,
        car3: AuctionLive,
        car4: OldCar,
        car5: NewCar,
        car6: Search,
  },
  {
        initialRouteName: "Home",
        defaultNavigationOptions: 
        {
          
            title: "App",
            //header : null,
            headerTitleStyle: {
              textAlign: 'left',
              fontSize: 30,            
          }
        }
  }
);
export default createAppContainer(Navigation);