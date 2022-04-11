import { environment } from 'src/environments/environment';
export const endpoint = {
  list: `${environment.apiUrl}/students/get-students`,
  create: `${environment.apiUrl}/students/create-student`,
  update: `${environment.apiUrl}/students/update-student`,

  get: `${environment.apiUrl}/students/get-student`,
  delete: `${environment.apiUrl}/students/delete-student`,
  search: `${environment.apiUrl}/students/get-student`,
};
