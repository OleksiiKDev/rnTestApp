import React from 'react';
import { ROUTES } from '@/constants/routes';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.LIST as never)}
        title="Go to List"
      />
    </View>
  );
};

export default HomeScreen;
