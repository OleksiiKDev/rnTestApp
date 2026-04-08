import { DetailedPerson } from "@/types/api/fetch-list";

export type Person = Pick<DetailedPerson, 'name' | 'gender' | 'birth_year' | 'url'> & {
  id: string;
};
