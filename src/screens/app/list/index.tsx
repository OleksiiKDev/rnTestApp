import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchList } from '@/api/fetch-list';
import { ROUTES } from '@/constants/routes';
import { type Person } from '@/types/card';
import { type RootStackNavigationProp } from '@/types/navigation';

const ListScreen = () => {
  const [list, setList] = useState<Person[]>([]);
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleItemPress = (person: Person) => {
    const { url } = person;
    const id = url.split('/').filter(Boolean).pop() as string;
    navigation.navigate(ROUTES.DETAILS, { personId: id });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchList();
        setList(data.results || []);
      } catch (error) {
        console.error('Error fetching list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {list.map((person, index) => (
          <Pressable key={index} onPress={() => handleItemPress(person)}>
            <View key={index} style={styles.item}>
              <Text style={styles.name}>{person.name}</Text>
              <View>
                <Text style={styles.details}>{person.gender}</Text>
                <Text style={styles.details}>{person.birth_year}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
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

export default ListScreen;
