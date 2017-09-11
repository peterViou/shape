import {IAsset} from "./iasset";

export interface ISerie {
  id: number;
  title: string;
  artist: string;
  assets: IAsset[];
}
