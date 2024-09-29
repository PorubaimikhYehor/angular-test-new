import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
