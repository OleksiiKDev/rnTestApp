import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { type Person } from '@/types/card';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isPersonFavourite } from '@/redux/selectors';
import { addToFavourites, removeFromFavourites } from '@/redux/thunks';
import { colors, radius, spacing } from '@/theme';

const FavouriteToggle = ({ person }: { person: Person }) => {
  const dispatch = useAppDispatch();
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
      onPress={handleFavouriteToggle}
      style={({ pressed }) => [
        styles.button,
        isInFavourites ? styles.buttonActive : styles.buttonInactive,
        pressed && styles.buttonPressed,
      ]}
      hitSlop={8}
    >
      <Text style={[styles.label, isInFavourites ? styles.labelActive : styles.labelInactive]}>
        {isInFavourites ? 'In favourites' : 'Add to favourites'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.pill,
    borderWidth: 1,
    minWidth: 134,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  buttonActive: {
    backgroundColor: '#FFF2F2',
    borderColor: '#F2C6C6',
  },
  buttonInactive: {
    backgroundColor: colors.primarySoft,
    borderColor: '#B6CDFB',
  },
  buttonPressed: {
    opacity: 0.88,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
  },
  labelActive: {
    color: colors.danger,
  },
  labelInactive: {
    color: colors.primary,
  },
});

export default FavouriteToggle;
