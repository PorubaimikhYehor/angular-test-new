import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ToolsComponent } from './tools/tools.component';

export const routes: Routes = [
    { component: HomeComponent, path: "home", data: { title: "Home", icon: "home" } },
    { component: ToolsComponent, path: "tools", data: { title: "Tools", icon: "settings" } },
    { component: SettingsComponent, path: "settings", data: { title: "Setting", icon: "settings" } },
    { path: "", pathMatch: 'full', redirectTo: "home" },
]