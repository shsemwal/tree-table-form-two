import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRowDialogComponent } from '../add-row-dialog/add-row-dialog.component';
import { AddChildDialogComponent } from '../add-child-dialog/add-child-dialog.component';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent {
  @Input() rows: any[] = [];

  constructor(public dialog: MatDialog) {}

  addRow(): void {
    const dialogRef = this.dialog.open(AddRowDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rows.push({ key: this.generateKey(), data: result, children: [] });
      }
    });
  }

  addChild(parentRow: any): void {
    const dialogRef = this.dialog.open(AddChildDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        parentRow.children.push({ key: this.generateKey(), data: result, children: [] });
      }
    });
  }

  removeRow(index: number): void {
    this.rows.splice(index, 1);
  }

  removeChild(parentIndex: number, childIndex: number, rowIndex: number | null): void {
    const rows = rowIndex !== null ? this.rows[rowIndex].children : this.rows;
    if (rows[parentIndex]?.children) {
      rows[parentIndex].children.splice(childIndex, 1);
    }
  }

  generateKey(): number {
    return this.rows.length === 0 ? 0 : this.rows[this.rows.length - 1].key + 1;
  }

  submitForm(): void {
    console.log('Form Data:', this.rows);
  }
}
