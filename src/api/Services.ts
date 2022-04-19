import { AxiosResponse } from "axios";
import api from "./instance";
import { IPhoto, IPhotosResponse } from "../types/ResponseTypes";
export default class PhotoService {
  static async getPhotos(
    query: string
  ): Promise<AxiosResponse<IPhotosResponse>> {
    return api.get<IPhotosResponse>(`search?query=${query}&per_page=6`);
  }
  static async getPhoto(photoID: string): Promise<AxiosResponse<IPhoto>> {
    return api.get<IPhoto>(`photos/${photoID}`);
  }
}
