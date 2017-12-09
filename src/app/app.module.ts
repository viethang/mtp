import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { PlannerModule } from './planner/planner.module';
import { DurationPipe } from './utils/duration.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MapModule, PlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
