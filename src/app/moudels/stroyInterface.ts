import { byUserIntreface } from "./byUserInterface";
import { comentInterface } from "./comentInerface";

export interface story{
    _id:string,
    txt:string,
    imgUrl:string,
     by:byUserIntreface,
    comments:comentInterface[],
    likedBy:byUserIntreface[],
}