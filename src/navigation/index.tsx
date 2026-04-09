import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants/routes';
import HomeScreen from '@/screens/app/home';
import ListScreen from '@/screens/app/list';
import DetailsScreen from '@/screens/app/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '@/screens/app/map';
import { colors } from '@/theme';

const BottomTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: colors.surface,
    tabBarInactiveTintColor: '#C9DAFF',
    tabBarHideOnKeyboard: true,
    tabBarShowIcon: false,
    tabBarIconStyle: {
      display: 'none',
    },
    tabBarItemStyle: {
      paddingBlock: 6,
    },
    tabBarLabelStyle: {
      fontSize: 15,
      fontWeight: '700',
    },
    tabBarStyle: {
      backgroundColor: colors.primary,
    },
    tabBarInactiveBackgroundColor: 'transparent',
    sceneStyle: {
      backgroundColor: colors.background,
    },
  },
  screens: {
    [ROUTES.HOME]: {
      screen: HomeScreen,
      options: {
        title: 'Home',
      },
    },
    [ROUTES.MAP]: {
      screen: MapScreen,
      options: {
        title: 'Map',
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: ROUTES.HOME,
  screenOptions: {
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
      color: colors.text,
      fontWeight: '700',
    },
  },
  screens: {
    [ROUTES.HOME]: {
      screen: BottomTabs,
      options: { headerShown: false },
    },
    [ROUTES.LIST]: {
      screen: ListScreen,
      options: {
        title: 'People',
      },
    },
    [ROUTES.DETAILS]: {
      screen: DetailsScreen,
      options: {
        title: 'Details',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
