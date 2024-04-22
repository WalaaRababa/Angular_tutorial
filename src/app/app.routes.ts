import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';

export const routes: Routes = [
    {
        path:"",
        component:AvatarComponent
    },
    {
        path:"avatar",
        component:HomeComponent
    },
    

];
