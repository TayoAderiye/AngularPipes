import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string
  date!: string
  amount!: number
  height!: number
  miles!: number

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  onNameChange(event: any){
    const target = event.target as HTMLInputElement;
    this.name = target.value
  }

  onDateChange(event: any){
    const target = event.target as HTMLInputElement;
    this.date = target.value
  }

  onAmountChange(event: any){
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value)
  }

  onHeightChange(event: any){
    const target = event.target as HTMLInputElement
    this.height = parseFloat(target.value)
  }

  onMilesChange(event: any){
    const target = event.target as HTMLInputElement
    this.miles = parseFloat(target.value)
  }
}
