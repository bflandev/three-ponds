import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
export interface RestorationSession {
  id: string;
  uid: string;
  afterPictureUrl: string;
  beforePictureUrl: string;
  end: Timestamp;
  latitude: string;
  longitude: string;
  projectId: string;
  restorationTypeId: string;
  start: Timestamp;
}
