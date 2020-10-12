// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

// angular material
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';

// others
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ToolbarComponent, ClipboardComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    // angular
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,

    ScrollingModule,

    // angular material
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatSnackBarModule,

    // components
    ToolbarComponent,
    ClipboardComponent,
  ],
})
export class SharedModule {}
