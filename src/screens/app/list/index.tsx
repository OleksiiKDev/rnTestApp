import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchFavourites, fetchPeople } from '@/redux/thunks';
import { peopleList } from '@/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import PersonCard from '@/components/Person/Card';
import { colors, spacing } from '@/theme';

const ListScreen = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(peopleList);

  useEffect(() => {
    if (list.length !== 0) return;

    dispatch(fetchPeople());
    dispatch(fetchFavourites());
  }, [dispatch, list.length]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>People</Text>
        <Text style={styles.subtitle}>
          Browse the list, open a profile, and save the characters you want to
          revisit.
        </Text>
      </View>

      {list.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Loading people...</Text>
          <Text style={styles.emptyText}>
            The first fetch can take a moment while the app loads data and
            favourites.
          </Text>
        </View>
      ) : (
        list.map(person => <PersonCard key={person.id} person={person} />)
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 22,
    borderWidth: 1,
    marginTop: spacing.lg,
    padding: spacing.xl,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default ListScreen;
