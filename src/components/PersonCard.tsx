import React from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';
import { type Person } from '@/types/card';
import { type RootStackNavigationProp } from '@/types/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isPersonFavourite } from '@/redux/selectors';
import { addToFavourites, removeFromFavourites } from '@/redux/thunks';

const PersonCard = ({ person }: { person: Person }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootStackNavigationProp>();
  const isInFavourites = useAppSelector(isPersonFavourite(person.id));

  const handleFavouriteToggle = () => {
    if (isInFavourites) {
      dispatch(removeFromFavourites(person.id));
      return;
    }
    dispatch(addToFavourites(person.id));
  };

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
        <Button
          title={
            isInFavourites ? 'Remove from Favourites' : 'Add to Favourites'
          }
          onPress={handleFavouriteToggle}
        />
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
