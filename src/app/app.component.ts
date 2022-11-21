import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.row = Number(localStorage.getItem('row'));
    this.total = Number(localStorage.getItem('total'));
    this.pending = Number(localStorage.getItem('pending'));
  }

  public row!: number;
  public total!: any;
  public pending!: number;

  public calcular(num: number): void {
    this.row = this.row + num;
    this.pending = this.total - this.row

    this.guardarDatos();

    if (this.pending < 0) {
      this.pending = 0
    }

  }

  public reset(): void {
    localStorage.clear();
    this.row = 0;
    this.total = null;
    this.pending = 0;
  }

  private guardarDatos(): void {
    localStorage.setItem('row', this.row.toString());
    localStorage.setItem('total', this.total.toString());
    localStorage.setItem('pending', this.pending.toString());
  }

}
