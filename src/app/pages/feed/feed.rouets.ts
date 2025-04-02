import { Routes } from '@angular/router';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { ProfileComponent } from '../profile/profile.component';


export const Feedroutes: Routes = [
    {
    path:'',
    component:PostListComponent
    },{
    path:':id',
    component:ProfileComponent
    }]