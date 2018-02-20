import { JsonProperty } from 'json-typescript-mapper';

export class SpacexRocketModel {

  @JsonProperty('rocket_id')
  Id: string;
  @JsonProperty('rocket_name')
  Name: string;
  @JsonProperty('rocket_type')
  Type: string;

  constructor() {
    this.Id = undefined;
    this.Name = undefined;
    this.Type = undefined;
  }
}
