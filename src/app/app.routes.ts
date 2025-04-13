import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth-guard.guard';
import { userResolver } from './resolvers/user.resolver';

export const routes: Routes = [
    {
    path:'feed',
    component:FeedComponent,
    children:[
           {
            path:'',
            component:PostListComponent
            },{
            path:':username',
            component:ProfileComponent,
            resolve:{user:userResolver}
            }
    ],
    canActivate:[authGuard]
    },{
        path:'',
        component:HomeComponent
    },{
        path:'signup',
        component:SignupComponent

    }
];
