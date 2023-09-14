import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableColumns: any;
  @Input() tableTitle: any;
  @Input() tableActions: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.checkTableActions();
    this.tableData = new MatTableDataSource<any>(this.tableData);
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  checkTableActions() {
    if (this.tableActions) {
      this.tableColumns.push('edit');
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogComponent, {
      width: '40vw',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
