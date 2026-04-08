import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fetchList } from '@/api/fetch-list';
import { Person } from '@/types/card';

const ListScreen = () => {
  const [list, setList] = useState<Person[]>([]);

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
      <Text>List Screen</Text>
      <ScrollView>
        {list.map((person, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.name}>{person.name}</Text>
            <View>
              <Text style={styles.details}>{person.gender}</Text>
              <Text style={styles.details}>{person.birth_year}</Text>
            </View>
          </View>
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
