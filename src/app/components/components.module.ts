import { NgModule } from '@angular/core';

import { AgentComponent } from './agent.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import {DataService} from '../data.service';

//import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { NgProgressModule } from 'ngx-progressbar';
import { DatePipe } from '@angular/common';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { MemberComponent } from './member/member.component';
import { OwnerComponent } from './owner/owner.component'
import { FilterPipe } from '../filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatFormFieldModule,
    NgProgressModule,
    MatInputModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    MatButtonModule,
    NgbModule,
    MatCheckboxModule,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [
    AgentComponent , MemberComponent, OwnerComponent ,FilterPipe
  ],
  providers : [DataService , DatePipe , FilterPipe]
  
})
export class ComponentsModule { }
