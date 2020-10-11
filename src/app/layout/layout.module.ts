// angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutDefaultComponent } from './components/layout-default/layout-default.component';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';

@NgModule({
  declarations: [LayoutAuthComponent, LayoutDefaultComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, LayoutAuthComponent, LayoutDefaultComponent],
})
export class LayoutModule {}
