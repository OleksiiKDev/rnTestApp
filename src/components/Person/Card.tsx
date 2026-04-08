import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';
import { type Person } from '@/types/card';
import { type RootStackNavigationProp } from '@/types/navigation';
import FavouriteToggle from './FavouriteToggle';

const PersonCard = ({ person }: { person: Person }) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  

  return (
    <Pressable
      key={person.id}
      onPress={() =>
        navigation.navigate(ROUTES.DETAILS, { personId: person.id })
      }
    >
      <View style={styles.item}>
        <Text style={styles.name}>{person.name}</Text>
        <View>
          <Text style={styles.details}>{person.gender}</Text>
          <Text style={styles.details}>{person.birth_year}</Text>
        </View>
        <FavouriteToggle person={person} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingBlock: 10,
    paddingInline: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default PersonCard;
