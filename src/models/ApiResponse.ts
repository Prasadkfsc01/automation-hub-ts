export interface ApiResponseModel<T> {
  data: T;
  message?: string;
  status?: number;
}
