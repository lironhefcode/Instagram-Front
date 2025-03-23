import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
    path:'',
    component:FeedComponent
    },{
        path:'home',
        component:HomeComponent
    }
];
