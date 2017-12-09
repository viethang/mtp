import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AutocompleteLocationComponent } from './autocomplete-location/autocomplete-location.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NguiAutoCompleteModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [
    PlannerComponent,
    SearchboxComponent,
    AutocompleteLocationComponent,
    ],
  exports: [PlannerComponent]
})
export class PlannerModule {
}
