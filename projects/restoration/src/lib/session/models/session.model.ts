import { Timestamp } from '@firebase/firestore-types';

export interface RestorationSession {
  id?: string;
  afterPictureUrl?: string;
  beforePictureUrl: string;
  end?: Timestamp;
  latitude: number;
  longitude: number;
  projectId: string;
  projectDesc: string;
  restorationTypeId: string;
  restorationTypeDesc: string;
  start: Timestamp;
  uid: string;
}
