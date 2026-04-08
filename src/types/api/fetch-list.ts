import { Person } from "@/types/card";

export type PeopleApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};