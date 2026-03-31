import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, listUsers } from "./api";
import type { CreateUserDTO, User } from "./types";

export function useUsers(tenantId: string) {
  return useQuery<User[], Error>({
    queryKey: ["users", tenantId],
    queryFn: () => listUsers(tenantId),
    enabled: Boolean(tenantId),
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<User, Error, CreateUserDTO>({
    mutationFn: (data: CreateUserDTO) => createUser(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users", data.tenantId] });
    },
  });
}
