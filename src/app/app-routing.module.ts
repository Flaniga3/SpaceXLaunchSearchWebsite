import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchSearchComponent } from './search/launch-search.component';
import { SpacexLaunchDetailComponent } from "./spacex-launch-detail/spacex-launch-detail.component"

const routes: Routes = [
  { path: '', redirectTo: 'SpaceXLaunchSearch', pathMatch: 'full' },
  { path: 'SpaceXLaunchSearch', component: LaunchSearchComponent },
  { path: 'SpaceXLaunchDetail/:id', component: SpacexLaunchDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
