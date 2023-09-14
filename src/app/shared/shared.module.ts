import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TableComponent } from './components/table/table.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    BarChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    BarChartComponent,
    TableComponent,
  ],
})
export class SharedModule {}
