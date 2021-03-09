export interface IUsers {
    id: number;
    name: string;
}
export interface IProjects {
    id: number;
    name: string;
    personId: number;
    organization: string;
    created?: number 
}
// export interface IList {
//     name: string;
//     personName: string;
// }