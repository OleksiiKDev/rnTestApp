import React from 'react';
import { useRoute } from '@react-navigation/native';
import { DetailsRouteProp } from '@/types/navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '@/redux/hooks';
import { personById } from '@/redux/selectors';
import FavouriteToggle from '@/components/Person/FavouriteToggle';
import { colors, radius, shadow, spacing } from '@/theme';

const DetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const personId = route.params?.personId ?? '';
  const person = useAppSelector(personById(personId));

  if (!person) {
    return (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>Character not found</Text>
          <Text style={styles.emptyText}>
            The selected profile could not be loaded from the current list.
          </Text>
        </View>
    );
  }

  return (
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{person.name.slice(0, 1)}</Text>
          </View>
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.subtitle}>Character profile</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{person.gender}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Birth year</Text>
            <Text style={styles.value}>{person.birth_year}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>{person.id}</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <Text style={styles.sectionTitle}>Quick action</Text>
          <Text style={styles.actionText}>
            Save this person to favourites for faster access later.
          </Text>
          <FavouriteToggle person={person} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  heroCard: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
    padding: spacing.xl,
    ...shadow,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.lg,
    height: 72,
    justifyContent: 'center',
    marginBottom: spacing.md,
    width: 72,
  },
  avatarText: {
    color: colors.surface,
    fontSize: 28,
    fontWeight: '800',
  },
  name: {
    color: colors.surface,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#EAF1FF',
    fontSize: 15,
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    ...shadow,
  },
  actionCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.lg,
    ...shadow,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: spacing.sm,
  },
  row: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  label: {
    color: colors.textMuted,
    fontSize: 15,
  },
  value: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  actionText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  emptyWrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: spacing.sm,
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default DetailsScreen;
