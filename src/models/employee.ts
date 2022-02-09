export enum Position {
    BackendDeveloper = "BACKEND_DEVELOPER",
    CEO = "CEO",
    FrontendDeveloper = "FRONTEND_DEVELOPER",
    ProductOwner = "PRODUCT_OWNER",
    ScrumMaster = "SCRUM_MASTER"
}

export interface IEmployee {
    id: number;
    name: string;
    age: number;
    position: Position;
}

export interface IPositionStat {
    position: Position;
    count: number;
    age: number;
}