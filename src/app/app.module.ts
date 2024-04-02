import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'

import { AppComponent } from './app.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRowDialogComponent } from './add-row-dialog/add-row-dialog.component';
import { AddChildDialogComponent } from './add-child-dialog/add-child-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent,
    AddRowDialogComponent,
    AddChildDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
