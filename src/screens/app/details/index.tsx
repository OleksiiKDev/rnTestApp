import React from "react";
import { useRoute } from '@react-navigation/native';
import { DetailsRouteProp } from '@/types/navigation';
import { View, Text } from 'react-native';
import { useAppSelector } from "@/redux/hooks";
import { personById } from "@/redux/selectors";

const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const personId = route.params?.personId ?? '';
  const person = useAppSelector(personById(personId));

  return (
    <View>
        {person && (
          <View>
            <Text>{person.name}</Text>
            <Text>{person.gender}</Text>
            <Text>{person.birth_year}</Text>
          </View>
        )}
    </View>
  );
}

export default DetailsScreen;
