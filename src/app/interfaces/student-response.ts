import {Student} from './student';

export interface StudentResponse {
  success: boolean;
  students: Student[];
}
