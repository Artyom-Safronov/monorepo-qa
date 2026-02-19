import { User } from "../types/user";
import { Product } from "../types/product";
import { ApiResponse, ApiError } from "../types/api";

export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "email" in value &&
    "role" in value
  );
}

export function isProduct(value: unknown): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "price" in value &&
    "category" in value
  );
}

export function isApiResponse<T>(value: any): value is ApiResponse<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    "status" in value &&
    "success" in value
  );
}

function isApiError(value: unknown): value is ApiError {
  return (
    typeof value === "object" &&
    value !== null &&
    "code" in value &&
    "message" in value
  );
}
