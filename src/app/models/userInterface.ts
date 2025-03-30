import { ByUserIntreface } from "./byUserInterface"


export interface User{
    _id:string,
	username: string,
	password:string,
	fullname: string,
	imgUrl: string,

	following: ByUserIntreface[]
	followers:ByUserIntreface[] ,
	likedStoryIds: String[], 
	savedStoryIds: string[],
}