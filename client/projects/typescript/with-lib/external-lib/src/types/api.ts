export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type Result<T, E = ApiError> =
  | { ok: true; value: T }
  | { ok: false; error: E };
