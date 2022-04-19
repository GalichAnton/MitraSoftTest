import { AxiosResponse } from "axios";
import api from "./instance";
import { IPhotoResponse } from "../types/ResponseTypes";
export default class ImageService {
  static async getImages(): Promise<AxiosResponse<IPhotoResponse>> {
    return api.get<IPhotoResponse>(`search?query=nature&per_page=6`);
  }
}
