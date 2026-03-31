import { apiFetch } from "@/lib/api-client";
import type { User, CreateUserDTO } from "./types";

export async function createUser(data: CreateUserDTO): Promise<User> {
  return apiFetch<User>("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function listUsers(tenantId: string): Promise<User[]> {
  const params = new URLSearchParams({ tenantId });
  return apiFetch<User[]>(`/users?${params.toString()}`);
}
