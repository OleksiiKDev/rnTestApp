import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { fetchFavourites, fetchPeople } from '@/redux/thunks';
import { peopleList } from '@/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import PersonCard from '@/components/PersonCard';

const ListScreen = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(peopleList);


  useEffect(() => {
    if (list.length !== 0) return;
    dispatch(fetchPeople());
    dispatch(fetchFavourites());
  }, [dispatch, list.length]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {list.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlock: 20,
  },
});

export default ListScreen;
