import { Timestamp } from '@firebase/firestore-types';

export interface RestorationSession {
  id?: string;
  end?: Timestamp;
  latitude: number;
  longitude: number;
  projectId: string;
  projectDesc: string;
  // restorationTypeId: string;
  // restorationTypeDesc: string;
  start: Timestamp;
  uid: string;
}

export interface RestorationActivity {
  afterPictureUrl?: string;
  beforePictureUrl: string;
}
