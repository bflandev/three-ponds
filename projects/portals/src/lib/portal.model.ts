export interface Portal {
    id: string;
    name: string;
    isActive: boolean;
    description: string;
}

export interface UserPortal {
    id:string;
    userId: string;
    portalId: string;
}