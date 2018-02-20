import { JsonProperty } from 'json-typescript-mapper';

export class SpacexLaunchSiteModel {

  @JsonProperty('site_id')
  Id: string;
  @JsonProperty('site_name')
  Name: string;
  @JsonProperty('site_name_long')
  SiteNameLong: string;

  constructor() {
    this.Id = undefined;
    this.Name = undefined;
    this.SiteNameLong = undefined;
  }
}
