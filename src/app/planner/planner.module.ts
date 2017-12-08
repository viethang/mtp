import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlannerComponent, SearchboxComponent],
  exports: [PlannerComponent, SearchboxComponent]
})
export class PlannerModule { }
