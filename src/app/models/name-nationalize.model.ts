export interface NameNationalizeModel {
  readonly country: [
    {
      readonly country_id: string;
      readonly probability: number;
    }
  ];
  readonly name: string;
}
