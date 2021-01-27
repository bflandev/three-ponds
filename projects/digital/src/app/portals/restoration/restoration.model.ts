export interface RestorationSession {
    id: string;
    afterPictureUrl: string;
    beforePictureUrl: string;
    end: Date;
    latitude: string;
    longitude: string;
    projectId: string;
    restorationTypeId: string;
    start: Date;
}