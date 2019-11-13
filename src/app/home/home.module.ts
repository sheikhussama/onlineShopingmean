import { NgModule } from '@angular/core';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { ourHomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderCategoryComponent } from '../common/slider-category/slider-category.component';




@NgModule({
    declarations: [
        HomeComponent,
        HomeLandingComponent,
        SliderCategoryComponent
    ],
    imports: [
        ourHomeRouting
    ],
    providers: []
})
export class HomeModule {}