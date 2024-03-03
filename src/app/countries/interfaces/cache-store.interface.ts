import { Country } from "./country";
import { Region } from "./region.type";


export interface ChaceStore{
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries{
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region: Region;
  countries: Country[];
}
