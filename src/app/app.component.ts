import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { routes } from './app.routes';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(_ => {
        const routeData = this.activatedRoute.snapshot.firstChild?.data;
        this.displayTitle = this.title + (routeData && (' / ' + routeData['title']));
      })
  }

  displayTitle = "";
  title = 'Azure Board Clone';
  routes = routes.filter(i => i.data && i.data['title']);

}
