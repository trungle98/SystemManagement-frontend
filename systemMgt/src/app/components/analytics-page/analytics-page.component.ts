import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { AnalyticsService } from 'src/app/_services/analytics.service';
import { Analytics } from 'src/app/models/analytics';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent {
  public chart: any;
  public bullyingChart:any;
  public bullyingUserChart:any;
  data!:Analytics[]
  constructor(private analyticsService: AnalyticsService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPieChartIdeaDept();
    this.getPieChartBullyingComment();
    this.getTopBullyingUser();
  }
  getPieChartIdeaDept() {
    this.analyticsService.getBarChart().subscribe({
      next: data => {
        this.data = data;
        const ids: number[] = [];
        const names: String[] = [];
        const nums: number[] = [];
        this.data.forEach((a) => {
          ids.push(a.id);
          names.push(a.name);
          nums.push(a.number);
        });
        this.createPieChart(ids,names, nums, "MyChart")
      },
      error: err => {console.log(err)
        if (err.error) {
        } else {
        }
      }
    })
  }

  getPieChartBullyingComment() {
    this.analyticsService.getPieChartBullyingComment().subscribe({
      next: data => {
        this.data = data;
        const ids: number[] = [];
        const names: any[] = [];
        const nums: any[] = [];
        this.data.forEach((a) => {
          ids.push(a.id);
          names.push("not_bullying")
          names.push("is_bullying")
          nums.push(a.name);
          nums.push(a.number);
        });
        this.createPieChart(ids,names, nums, "MyChart2")
      },
      error: err => {console.log(err)
        if (err.error) {
        } else {
        }
      }
    })
  }

  getTopBullyingUser() {
    this.analyticsService.getTopBullyingUser().subscribe({
      next: data => {
        this.data = data;
        const ids: number[] = [];
        const names: any[] = [];
        const nums: any[] = [];
        console.log(data);
        
        this.data.forEach((a) => {
          // ids.push(a.id);
          names.push(a.name);
          nums.push(a.number);
        });
        this.createPieChart(ids,names, nums, "bullyingUserChart")
      },
      error: err => {console.log(err)
        if (err.error) {
        } else {
        }
      }
    })
  }

  createPieChart(labels:any, label:String[], data:number[], chartName:any){

    this.chart = new Chart(chartName, {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: label, 
	       datasets: [
          {
            data: data,
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


}
