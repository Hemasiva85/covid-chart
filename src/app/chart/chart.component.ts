import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartTypeRegistry, BarController, LinearScale, CategoryScale, Title,LineController } from 'chart.js';
import { DataService } from '../data.service';
Chart.register(BarController, LinearScale, CategoryScale, Title, LineController);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
 chart: any;
  selectedDataType: string = 'confirmed';
  selectedChartType: keyof ChartTypeRegistry = 'line';
  chartData: any[]=[];
  //chart: Chart<keyof ChartTypeRegistry, (number | [number, number] | Point | BubbleDataPoint | null)[], unknown> = {} as Chart;

  constructor(private dataService: DataService) {}
   ngOnInit(): void {
    this.fetchData();
  }
  onChangeStatus(): void {
    this.fetchData();
  }
    onChangeChartType(): void {
    this.fetchData();
  }
  fetchData(): void {
    console.log(this.selectedDataType)
    this.dataService.getCovidData(this.selectedDataType).subscribe(data => {
	  console.log(data)
      this.chartData = data;
      this.updateChart(data);
    });
  }

  updateChart(data: any[]): void {
    //const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    //const ctx = canvas.getContext('2d');
	if (this.chart) {
      this.chart.destroy();
    }
	const labels = this.chartData.map(entry => entry.countryregion);
    const values = this.chartData.map(entry => entry[this.selectedDataType]);
    console.log(this.chartData.map(entry => entry.countryregion))
	this.chart = new Chart('myChart', {
      type: this.selectedChartType,
      data: {
        labels: labels,
        datasets: [{
          label: this.selectedDataType ,
          data: values,
          backgroundColor: 'rgba(100, 192, 192, 10)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 0
        }]
      },
      options: {
	       indexAxis: 'y',
        
      },
    });
  }
}
