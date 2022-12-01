import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MainInfoComponent } from './main-info/main-info.component';
import { CountdownTimerComponent, CountdownTimerModule } from 'projects/countdown-timer/src/public-api';
import { WhereWhenInfoComponent } from './where-when-info/where-when-info.component';
import { MassMapComponent } from './mass-map/mass-map.component';
import { HostMapComponent } from './host-map/host-map.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PhotoSectionComponent } from './photo-section/photo-section.component';
import { FamilyInfoComponent } from './family-info/family-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeDialogComponent,
    WelcomeInfoComponent,
    MainInfoComponent,
    WhereWhenInfoComponent,
    MassMapComponent,
    HostMapComponent,
    PhotoSectionComponent,
    FamilyInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    CountdownTimerModule,
    RouterModule,
    CarouselModule,
  ],
  providers: [
    CountdownTimerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
