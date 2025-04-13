import { ByUserIntreface } from "./byUserInterface";
import { comentInterface } from "./comentInerface";

export interface Story{
    _id?:string,
    txt:string,
    imgUrl:string,
     by:ByUserIntreface,
    comments:comentInterface[],
    likedBy:ByUserIntreface[],
}
export interface MiniStory{
    _id:string,
    imgUrl:string
}