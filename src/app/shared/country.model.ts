export interface CountryModel {
  flag: string,
  countryName: string,
  nativeName: string,
  population: number,
  region: string,
  subRegion: string,
  capital: string,
  code: string,
  borders: string[],
  languages: string,
  currencies: string,
  topLevelDomain: string
}

export interface CountryResponse {
  borders: string[],
  capital: string[],
  cca3: string,
  flags: {
    png: string,
    svg: string,
    alt?: string,
  },
  languages: {
    [key: string]: string
  },
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    },
  },
  name: {
    common: string,
    official: string,
    nativeName: {
      [key: string]: {
        official: string,
        common: string
      }
    },
  },
  population: number,
  region: string,
  subregion: string,
  tld: string[]
}
