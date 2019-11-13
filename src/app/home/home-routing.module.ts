import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';


const OURHOME_ROUTES: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: HomeLandingComponent },
        ]
    }
];

export const ourHomeRouting = RouterModule.forChild(OURHOME_ROUTES);