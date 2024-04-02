import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-child-dialog',
  templateUrl: './add-child-dialog.component.html',
  styleUrls: ['./add-child-dialog.component.css']
})
export class AddChildDialogComponent implements OnInit {
  name: string = '';
  size: string = '';
  type: string = '';

  onSave: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddChildDialogComponent>) { }

  ngOnInit(): void {
  }

  save(): void {
    const childData = { name: this.name, size: this.size, type: this.type };
    this.onSave.emit(childData);
    this.dialogRef.close(childData);
  }

  close(): void {
    this.dialogRef.close();
  }
}
