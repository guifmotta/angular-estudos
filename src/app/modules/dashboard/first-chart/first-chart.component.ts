import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexMarkers,
  ApexDataLabels,
  ApexGrid,
  ApexTheme
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  markers: ApexMarkers;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  theme: ApexTheme
};

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {

  public chartOptions: Partial<ChartOptions> | any;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Produtos",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      markers: {
        size: 4,
        hover: {
          sizeOffset: 2
        }
      },
      title: {
        text: "Produtos vendidos",
        align: "left"
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set"
        ]
      }
    };
  }

}
