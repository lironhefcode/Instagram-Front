import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
    path:'',
    component:FeedComponent,
    children:[
           {
            path:'',
            component:PostListComponent
            },{
            path:'feed/:id',
            component:ProfileComponent
            }
    ]
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'signup',
        component:SignupComponent

    }
];
