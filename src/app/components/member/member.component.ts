import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../data.service';
import { DatePipe } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {DashboardComponent} from '../../dashboard/dashboard.component'
import {MemberInst} from '../../models/memberInst';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { NgProgress } from 'ngx-progressbar';
import { FilterPipe } from '../../filter.pipe';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [DashboardComponent]

 
})
export class MemberComponent implements OnInit {

  public userName = localStorage.getItem('userName');
  public userType = localStorage.getItem('userType');
  public userCode = localStorage.getItem('userCode');
  memberList: MemberInst[] = [];
  dataSource:any

  /* sectorName: string;
    schemeName: string;
    installmentNo: string;
    instDueDate: string;
    payable: string;
    paid: string;
    balance: string; */
  displayedColumns = ['code', 'dealRef', 'plotCode', 'plotRef' , 'sectorName', 
          'schemeName' , 'installmentNo' , 'instDueDate' , 'payable' ,'paid', 'balance'];
  
  public data = '';
  public now:Date = new Date();

  public dataToSave:any;
  constructor(private dataService:DataService,
    private datePipe: DatePipe,
    private dashboardComponent:DashboardComponent,
    private ngProgress:NgProgress) { }

  ngOnInit() {
    this.ngProgress.start();
    this.dashboardComponent.validateDate();
    let code:any , dateCiteria:any;
    code = this.userCode;
    dateCiteria = this.dashboardComponent.strDueDateCriteria;
    if(this.userType == 'Member'){
      this.dataToSave = JSON.stringify({"data" :{ code ,dateCiteria}});
      this.dataService.getMemberData(this.dataToSave)
        .subscribe(data =>{
         // console.log(data);

          this.memberList = data;
          console.log(this.memberList);
          this.dataSource = new MatTableDataSource(this.memberList);
          this.ngProgress.done();
        });
      // strDueDateCriteria = "";
			// 	strODueDateCriteria = "";
			// 	var sDate:String = "";
			// 	var eDate:String = "";
			// 	var formatter : DateFormatter;
			// 	formatter = new DateFormatter();
			// 	formatter.formatString = "DD/MM/YYYY";
			// 	sDate = formatter.format(startDate);
			// 	eDate = formatter.format(endDate);
			// 	if(startDate.toString().length > 0){
			// 		strODueDateCriteria  = " < TO_DATE('"+sDate+"', '"+parentApplication.appParams.DATE_FORMAT+"'))"
			// 	}
			// 	if(startDate.toString().length > 0  &&  endDate.toString().length > 0){
			// 		strDueDateCriteria = " BETWEEN TO_DATE('"+sDate+"', '"+parentApplication.appParams.DATE_FORMAT+"') AND TO_DATE('"+eDate+ "', '"+parentApplication.appParams.DATE_FORMAT+"'))";
			// 	}
				
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

// export class MemberDataSource extends DataSource<any> {
//   constructor(private dataService: DataService ,
//               private memberComponent:MemberComponent) {
//     super();
//   }
//   connect(): Observable<MemberInst[]> {
//     return this.dataService.getMemberData(this.memberComponent.dataToSave);
//   }
//   disconnect() {}
// }

