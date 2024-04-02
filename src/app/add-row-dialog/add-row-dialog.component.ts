import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-row-dialog',
  templateUrl: './add-row-dialog.component.html',
  styleUrls: ['./add-row-dialog.component.css']
})
export class AddRowDialogComponent implements OnInit {
  name: string = '';
  size: string = '';
  type: string = '';

  onSave: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddRowDialogComponent>) { }

  ngOnInit(): void {
  }

  save(): void {
    const rowData = { name: this.name, size: this.size, type: this.type };
    this.onSave.emit(rowData);
    this.dialogRef.close(rowData);
  }

  close(): void {
    this.dialogRef.close();
  }
}
