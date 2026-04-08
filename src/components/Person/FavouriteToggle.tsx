import React from 'react';
import { Button } from 'react-native';
import { type Person } from '@/types/card';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isPersonFavourite } from '@/redux/selectors';
import { addToFavourites, removeFromFavourites } from '@/redux/thunks';

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
    <Button
      title={isInFavourites ? 'Remove from Favourites' : 'Add to Favourites'}
      onPress={handleFavouriteToggle}
    />
  );
};

export default FavouriteToggle;
