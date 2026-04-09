import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ROUTES } from '@/constants/routes';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/navigation';
import { colors, radius, shadow, spacing } from '@/theme';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>Star Wars Directory</Text>
          <Text style={styles.title}>Browse people, save favourites, and explore the map.</Text>
          <Text style={styles.subtitle}>
            A simple home screen with clear actions and readable visual hierarchy.
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate(ROUTES.LIST)}
          style={({ pressed }) => [styles.primaryCard, pressed && styles.pressed]}
        >
          <Text style={styles.primaryTitle}>Open People List</Text>
          <Text style={styles.primaryText}>
            View characters, inspect details, and manage favourites.
          </Text>
        </Pressable>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Map tab</Text>
          <Text style={styles.tipText}>
            Use the bottom tab to open the map screen and center the experience around location.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  hero: {
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
  },
  primaryCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    gap: spacing.sm,
    padding: spacing.xl,
    ...shadow,
  },
  primaryTitle: {
    color: colors.surface,
    fontSize: 22,
    fontWeight: '800',
  },
  primaryText: {
    color: '#EAF1FF',
    fontSize: 15,
    lineHeight: 22,
  },
  tipCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.xs,
    padding: spacing.lg,
    ...shadow,
  },
  tipTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  tipText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.92,
  },
});

export default HomeScreen;
