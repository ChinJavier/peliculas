import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';



@NgModule({
  declarations: [SlideshowBackdropComponent, SlidesshowPosterComponent, SlideshowParesComponent],
  exports:[SlideshowBackdropComponent, SlidesshowPosterComponent, SlideshowParesComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
