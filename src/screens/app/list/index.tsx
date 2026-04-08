import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
    <View>
      <Text>List Screen</Text>
      <ScrollView>
        {list.map((person, index) => (
          <View key={index}>
            <Text>{person.name}</Text>
            <View>
              <Text>{person.gender}</Text>
              <Text>{person.birth_year}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListScreen;
