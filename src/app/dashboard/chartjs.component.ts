import { Component , OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
@Component({
  selector : 'charts',
  templateUrl: 'chartjs.component.html',
  styles : [`
    
  `]
})
export class ChartJSComponent implements OnInit{

  // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Cash InFlow'},
  // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Cash OutFlow'}
  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Actual InFlow'},
    {data: [], label: 'Expected InFlow'}
  ];
  //public lineChartData:Array<any> = new Array(1);
  //public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public linelabel: any; 
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public datachart:any;
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartLabels1: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData1: any[];
  public barChartData: any[] = [
    {data: [], label: 'Cash Inflow'},
    {data: [], label: 'Cash Outflow'}
  ];

  
  
  // Pie
  // public pieChartLabels:any;
  // public pieChartData: any;On Hold,Cancelled,Available,Not Available,Incomplete,Re-Purchase,Sold dsf dsf 35,12,51,3,0,0,88
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartLabels1: string[] = [];
  public pieChartData1: number[] = [];
  public pieChartType = 'pie';


 constructor(
   private dataService:DataService
 ){
 
 }
 ngOnInit(){
  this.loadLineChart();
  this.loadPieChart();
  this.loadBarChart();
 }
 public loadBarChart(){
  this.dataService.getBarChart()
     .subscribe(data1 =>{
      
       data1.forEach(element => {
         this.barChartLabels.push(element.month);
         
         this.barChartData[0].data.push(parseInt(element.cashInFlow));
         this.barChartData[1].data.push(parseInt(element.cashOutFlow));
         
      });
      
      this.barChartData1 = this.barChartData;
      this.barChartLabels1 = this.barChartLabels;
     
     });
 }
 public loadPieChart(){
  this.pieChartLabels = null;
  this.pieChartData= null;
  this.dataService.getPieChart()
  .subscribe(data1 =>{
   // console.log(data1);
    
    data1.forEach(element => {
     
        this.pieChartLabels1.push(element.status);
       
        this.pieChartData1.push(parseInt(element.value));
        // this.pieChartLabels = element.map(val => val.status);
        // setTimeout( () => {this.pieChartData1.push(parseInt(element.value))});
   });
  
   this.pieChartLabels = this.pieChartLabels1;
   this.pieChartData = this.pieChartData1;
   //console.log(this.pieChartLabels + " dsf dsf " + this.pieChartData);
  });
 }
 public loadLineChart(){
 
  this.dataService.getLineChart()
     .subscribe(data1 =>{
      
       data1.forEach(element => {
         this.lineChartLabels.push(element.month);
         
         this.lineChartData[0].data.push(parseInt(element.cashInFlow));
         this.lineChartData[1].data.push(parseInt(element.cashOutFlow));
         
      });
      
      this.datachart = this.lineChartData;
      this.linelabel = this.lineChartLabels;
     
     });
 }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
