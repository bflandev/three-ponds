import { Timestamp } from '@firebase/firestore-types';

export interface RestorationSession {
  id?: string;
  afterPictureUrl?: string;
  beforePictureUrl: string;
  end?: Date;
  latitude: number;
  longitude: number;
  projectId: string;
  projectDesc: string;
  restorationTypeId: string;
  restorationTypeDesc: string;
  start: Date;
  uid: string;
}
