import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FindingFalconeAppComponent } from './finding-falcone.app.component';

@NgModule({
  // This makes available no. of core angular services and directives available to angular app
  imports: [BrowserModule],
  // Add a component, directive and pipe
  declarations: [FindingFalconeAppComponent],
  bootstrap: [FindingFalconeAppComponent],
})
export class AppModule {}
