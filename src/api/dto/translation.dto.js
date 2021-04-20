
export enum TranslationStatus {
  Created = 0,
  InProgress = 1,
  Done = 2,
}

export interface TranslationDTO {
  id: number;
  title: string;
  translations: string;
  status: TranslationStatus;
}

