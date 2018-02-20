import { Component, OnInit } from '@angular/core';
import { SpacexLaunchModel } from "../Models/spacex-launch.model";
import { deserialize } from "json-typescript-mapper"
import { SpacexLaunchService } from "../Services/spacex-launch.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-spacex-launch-detail',
  templateUrl: './spacex-launch-detail.component.html',
  styleUrls: ['./spacex-launch-detail.component.css']
})
export class SpacexLaunchDetailComponent implements OnInit {

  Launch: SpacexLaunchModel;
  Links: string[];

  constructor(
    private launchService: SpacexLaunchService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLaunch();
  }

  getLaunch(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.launchService.getLaunch(id)
      .subscribe(result => {
        if (result) {
          this.Launch = deserialize(SpacexLaunchModel, result);
          this.Links = Object.values(result['links'])
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

}
