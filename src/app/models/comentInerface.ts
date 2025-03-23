import { ByUserIntreface } from "./byUserInterface";


export interface comentInterface {
    id:string,
    txt:string,
    by:ByUserIntreface,
    likedBy:ByUserIntreface[]
}