import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [MaterialModule, AsyncPipe, ReactiveFormsModule, FormsModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  sendEventForm = new FormGroup({
    model: new FormControl(''),
    eventName: new FormControl(''),
    resultCode: new FormControl(''),
    outputs: new FormControl(''),
  })

  myControl = new FormControl('');
  options: string[] = ['Receiving', 'Shipping', 'Production', 'Storring'].map(i => 'Activity_' + i);

  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
