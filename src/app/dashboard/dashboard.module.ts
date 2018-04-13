import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
//import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { NgProgressModule } from 'ngx-progressbar';
import { DatePipe } from '@angular/common';
import { ChartJSComponent } from './chartjs.component';
@NgModule({
  imports: [CommonModule,NgbModule,
    DashboardRoutingModule,
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    NgProgressModule,
    MatTableModule,
    CdkTableModule
  ],
  exports : [
    CommonModule,
    DashboardComponent
  ],
  declarations: [ DashboardComponent , ChartJSComponent],
  providers : [DataService , DatePipe]
})
export class DashboardModule { }
