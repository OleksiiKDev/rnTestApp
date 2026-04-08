
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants/routes';
import  HomeScreen from '@/screens/app/home';
import ListScreen from '@/screens/app/list';
import DetailsScreen from '@/screens/app/details';

const RootStack = createNativeStackNavigator({
  initialRouteName: ROUTES.HOME,
  screens: {
    [ROUTES.HOME]: HomeScreen,
    [ROUTES.LIST]: ListScreen,
    [ROUTES.DETAILS]: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;