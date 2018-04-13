import { Component , OnInit, style} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { DatePipe } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FullLayoutComponent } from '../layouts/full-layout.component';


@Component({
  templateUrl: 'dashboard.component.html',
  styles : [`
  .example-container {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }
  
  .example-header {
    min-height: 64px;
    padding: 8px 24px 0;
  }
  
  .mat-form-field {
    font-size: 14px;
    width: 100%;
  }
  
  .mat-table {
    overflow: auto;
    max-height: 500px;
  }
  
  `],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  public userName = localStorage.getItem('userName');
  public userType = localStorage.getItem('userType');
  public userCode = localStorage.getItem('userCode');
  public now:Date = new Date();
  private startDate:Date;
  private endDate:Date;
  public strDueDateCriteria:any;
  public strODueDateCriteria:any;



  // var now:Date = new Date();
	// 			startDate = new Date(now.fullYear, now.month, 1);
	// 			endDate = new Date(now.fullYear, ++now.month, 0);
	// 			dateLabel = getMonthAsString(endDate.month)+ "-" +endDate.fullYear;

  constructor( private dataService:DataService,
               private datePipe: DatePipe,
               private router: Router,
               private fullLayoutComponent:FullLayoutComponent
   ) { 

      
   this.startDate = new Date(this.now.getFullYear() , this.now.getMonth() , 1);
   this.endDate = new Date(this.now.getFullYear() , this.now.getMonth()+1 , 0);
    
   }
  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b'; 

 
   ngOnInit(){
   
    // this.validateDate();
    if(this.userType == 'Member' && !this.fullLayoutComponent.dbclick){
      this.router.navigateByUrl("/components/member");
    }
    // if(this.userType == 'Member'){
    //   this.dataToSave = JSON.stringify({"data" :{ code ,dateCiteria}});
    //   this.dataService.getMemberData(this.dataToSave)
    //     .subscribe(data =>{
    //       console.log(data);
    //     });
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
				
   // }

    
   }

 

  public validateDate():void{
    	this.strDueDateCriteria = "";
				this.strODueDateCriteria = "";
				let sDate:string = this.datePipe.transform(this.startDate, 'dd/MM/yyyy');
        let eDate:string = this.datePipe.transform(this.endDate, 'dd/MM/yyyy');
        console.log("startDate "+ this.datePipe.transform(this.startDate, 'dd/MM/yyyy') + " endDate "+this.datePipe.transform(this.endDate, 'dd/MM/yyyy'));

				// let formatter : DateFormatter();
				// formatter = new DateFormatter();
				// formatter.formatString = "DD/MM/YYYY";
				// sDate = formatter.format(startDate);
				// eDate = formatter.format(endDate);
				if(this.startDate.toString().length > 0){
					this.strODueDateCriteria  = " < TO_DATE('"+sDate+"', dd/MM/yyyy'))"
				}
				if(this.startDate.toString().length > 0  &&  this.endDate.toString().length > 0){
					this.strDueDateCriteria = " BETWEEN TO_DATE('"+sDate+"', 'dd/MM/yyyy') AND TO_DATE('"+eDate+ "', 'dd/MM/yyyy'))";
        }
       
  }

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
 
}
