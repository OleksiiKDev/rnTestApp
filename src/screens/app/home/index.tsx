import React from 'react';
import { ROUTES } from '@/constants/routes';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/navigation';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.LIST)}
        title="Go to List"
      />
    </View>
  );
};

export default HomeScreen;
