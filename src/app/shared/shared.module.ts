// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// angular material
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    // angular
    CommonModule,

    // angular material
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSortModule
  ],
  exports: [
    // angular
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // angular material
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,

    // components
    ToolbarComponent
  ],
})
export class SharedModule {}
