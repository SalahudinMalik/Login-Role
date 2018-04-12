import { Component , OnInit, style} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'dashboard.component.html',
  styles : [`
  
  `],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  public userName = localStorage.getItem('userName');
  public userType = localStorage.getItem('userType');
  public now:Date = new Date();
  private startDate:Date;
  private endDate:Date;
  private strDueDateCriteria:any;
  private strODueDateCriteria:any;
  // var now:Date = new Date();
	// 			startDate = new Date(now.fullYear, now.month, 1);
	// 			endDate = new Date(now.fullYear, ++now.month, 0);
	// 			dateLabel = getMonthAsString(endDate.month)+ "-" +endDate.fullYear;

  constructor( private dataService:DataService,
               private datePipe: DatePipe
   ) { }
  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

 
   ngOnInit(){
    this.startDate = new Date(this.now.getFullYear() , this.now.getMonth() , 1);
    this.endDate = new Date(this.now.getFullYear() , this.now.getMonth()+1 , 0);
    this.validateDate();
    if(this.userType == 'Member'){
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

