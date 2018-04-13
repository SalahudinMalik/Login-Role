import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgProgress } from 'ngx-progressbar';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';
import {ContentChildren, QueryList} from "@angular/core";
import {DataSource} from '@angular/cdk/collections';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { Observable } from 'rxjs/Observable';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {Plot} from '../models/plot.model';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']

})
export class AgentComponent implements OnInit {
  
 



  constructor(
    private dataService:DataService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

   // this.dataSource.connect().subscribe(data => this.plotdata = data);
  
    

    
  }
 

 
  


}


