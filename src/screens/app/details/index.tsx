import React from "react";
import { useRoute } from '@react-navigation/native';
import { DetailsRouteProp } from '@/types/navigation';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const personId = route.params?.personId ?? '';

  return (
    <View>
        <Text>Details Screen</Text>
        <Text>{personId}</Text>
    </View>
  );
}

export default DetailsScreen;
