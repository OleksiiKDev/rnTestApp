import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants/routes';
import HomeScreen from '@/screens/app/home';
import ListScreen from '@/screens/app/list';
import DetailsScreen from '@/screens/app/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '@/screens/app/map';

const BottomTabs = createBottomTabNavigator({
  screens: {
    [ROUTES.HOME]: HomeScreen,
    [ROUTES.MAP]: MapScreen,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: ROUTES.HOME,
  screens: {
    [ROUTES.HOME]: {
      screen: BottomTabs,
      options: { headerShown: false }, // Hide stack header to show tab headers
    },
    [ROUTES.LIST]: ListScreen,
    [ROUTES.DETAILS]: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
