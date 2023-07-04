export interface NationalizeDataModel {
  name: string;
  country: CountryInfo[];
}

export interface CountryInfo {
  country_id: string;
  probability: number;
}
