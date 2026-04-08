import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.LIST]: undefined;
  [ROUTES.DETAILS]: { personId: string };
  [ROUTES.MAP]: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailsRouteProp = RouteProp<RootStackParamList, typeof ROUTES.DETAILS>;
