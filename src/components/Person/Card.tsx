import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/constants/routes';
import { type Person } from '@/types/card';
import { type RootStackNavigationProp } from '@/types/navigation';
import FavouriteToggle from './FavouriteToggle';
import { colors, radius, shadow, spacing } from '@/theme';

const PersonCard = ({ person }: { person: Person }) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => navigation.navigate(ROUTES.DETAILS, { personId: person.id })}
        style={({ pressed }) => [styles.content, pressed && styles.contentPressed]}
      >
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{person.name.slice(0, 1)}</Text>
          </View>
          <View style={styles.titleGroup}>
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.subtitle}>Tap to view profile details</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.tag}>
            <Text style={styles.tagLabel}>{person.gender}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagLabel}>{person.birth_year}</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.footer}>
        <FavouriteToggle person={person} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
    overflow: 'hidden',
    ...shadow,
  },
  content: {
    padding: spacing.lg,
  },
  contentPressed: {
    opacity: 0.92,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '800',
  },
  titleGroup: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 13,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  tag: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tagLabel: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  footer: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    padding: spacing.md,
  },
});

export default PersonCard;
