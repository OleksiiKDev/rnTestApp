import { type DetailedPerson } from '@/types/api/fetch-list';
import { type Person } from '@/types/card';

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
};

export const personDTO = (person: DetailedPerson): Person => ({
  id: getIdFromUrl(person.url),
  name: person.name,
  gender: person.gender,
  birth_year: person.birth_year,
  url: person.url,
});
