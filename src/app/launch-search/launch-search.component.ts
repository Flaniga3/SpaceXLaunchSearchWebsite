import { Component, OnInit } from '@angular/core';
import { SpacexLaunchService } from "../Services/spacex-launch.service"
import { deserialize } from 'json-typescript-mapper';
import { SpacexLaunchModel } from "../Models/spacex-launch.model";

@Component({
  selector: 'app-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.css']
})
export class LaunchSearchComponent implements OnInit {
  currentPage = 1;
  launches: SpacexLaunchModel[];
  itemsPerPage = 10;
  displayedCollection: SpacexLaunchModel[];
  searchTerm: string = '';

  constructor(private launchService: SpacexLaunchService) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches(): void {
    this.launches = [];
    this.launchService.getLaunches()
      .subscribe(rawLaunches => {
        for (let launchRaw of rawLaunches as object[]) {
          const launchModel = deserialize(SpacexLaunchModel, launchRaw);
          this.launches.push(launchModel);
        }
        this.resetPaging();
      });
  }

  searchLaunches(query: string): void {
    this.launches = [];
    this.launchService.searchLaunches(query)
      .subscribe(rawLaunches => {
        for (let rawLaunch of rawLaunches as object[]) {
          const launch = deserialize(SpacexLaunchModel, rawLaunch);
          this.launches.push(launch);
        }
        this.resetPaging();
      });
  }

  pageChanged(event: any): void {
    const startIndex = (event.page - 1) * this.itemsPerPage;
    const endIndex = (event.page * this.itemsPerPage) - 1;
    this.displayedCollection = this.launches.slice(startIndex, endIndex);
  }

  resetPaging(): void {
    this.currentPage = 1;
    this.displayedCollection = this.launches.slice(0, this.itemsPerPage - 1);
  }
}
