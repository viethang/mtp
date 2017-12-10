import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { PlannerModule } from './planner/planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MapModule, PlannerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
