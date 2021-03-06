import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'foo-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent {
  @Output() cityWasSelected = new EventEmitter<string>();
  @ViewChild('cityText', {static: true}) cityTextRef: ElementRef;

  constructor() { }

  onCitySelected(): void {
    this.cityWasSelected.emit(this.cityTextRef.nativeElement.value);
  }
}
