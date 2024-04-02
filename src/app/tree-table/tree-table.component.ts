import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent {
  @Input() rows: any[] = [];

  addRow() {
    this.rows.push({ key: this.generateKey(), data: { name: '', size: '', type: '' }, children: [] });
  }

  addChild(parentRow: any) {
    parentRow.children.push({ key: this.generateKey(), data: { name: '', size: '', type: '' }, children: [] });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  removeChild(parentIndex: number, childIndex: number, rowIndex: number | null) {
    const rows = rowIndex !== null ? this.rows[rowIndex].children : this.rows;
    if (rows[parentIndex]?.children) {
      rows[parentIndex].children.splice(childIndex, 1);
    }
  }
  

  generateKey() {
    return this.rows.length === 0 ? 0 : this.rows[this.rows.length - 1].key + 1;
  }

  submitForm() {
    console.log('Form Data:', this.rows);
  }
}
