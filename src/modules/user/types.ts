export interface User {
  id: string;
  name: string;
  email: string;
  tenantId: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  tenantId: string;
}
