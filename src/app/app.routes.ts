import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdatHeroComponent } from './updat-hero/updat-hero.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {
        path:"", redirectTo:'/add',pathMatch:'full'
    },
    {
        path:"list",
        component:ListComponent
    },
    {
        path:"add",
        component:HeroComponent
    },
    {
        path:"update/:id",
        component:UpdatHeroComponent
    },
    {
        path:"avatar",
        component:HomeComponent
    },
    {
        path:"counter",
        component:CounterComponent
    },
    {
        path:"**",
        component:NotFoundComponent
    },
     

];
