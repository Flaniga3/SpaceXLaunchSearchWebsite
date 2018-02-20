import { JsonProperty } from 'json-typescript-mapper';
import {SpacexRocketModel} from "./spacex-rocket.model";
import {SpacexLaunchSiteModel} from "./spacex-launch-site.model";

export class SpacexLaunchModel {

  @JsonProperty('flight_number')
  FlightNumber: number;
  @JsonProperty('launch_date_utc')
  LaunchUtcDateTime: string;
  @JsonProperty('launch_date_local')
  LaunchLocalDateTime: string;
  @JsonProperty({clazz: SpacexRocketModel, name: 'rocket'})
  Rocket: SpacexRocketModel;
  @JsonProperty({clazz: SpacexLaunchSiteModel, name: 'launch_site'})
  LaunchSite: SpacexLaunchSiteModel;
  @JsonProperty('details')
  Details: string;
  @JsonProperty('launch_success')
  LaunchSuccess: boolean;
  @JsonProperty('links')
  Links: string[];



  constructor() {
    this.FlightNumber = undefined;
    this.LaunchUtcDateTime = undefined;
    this.LaunchLocalDateTime = undefined;
    this.Rocket = undefined;
    this.LaunchSite = undefined;
    this.Details = undefined;
    this.LaunchSuccess = undefined;
    this.Links = undefined;
  }
}
