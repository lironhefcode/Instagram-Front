import { ByUserIntreface } from "./byUserInterface"
import { MiniStory } from "./stroyInterface";


export interface User {
	_id: string,
	username: string,
	password: string,
	fullname: string,
	imgUrl: string,
	stories: MiniStory[],
	following: ByUserIntreface[],
	followers: ByUserIntreface[],
	likedStoryIds: String[],
	savedStoryIds: string[],
}