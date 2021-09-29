import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {​MatPaginatorModule}​ from'@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';

const material = [MatSidenavModule,MatFormFieldModule,MatToolbarModule,MatIconModule,MatCardModule,MatSelectModule,MatListModule,MatDividerModule,​MatPaginatorModule,LayoutModule]

@NgModule({
  imports: [...material],
  exports: [...material],
})
export class MaterialModule { }
