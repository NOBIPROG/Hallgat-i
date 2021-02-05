import {Gender} from '../enum/gender.enum';
import {Book} from './book';

export interface Student {
  id?: number;
  name: string;
  email: string;
  age: number;
  gender: Gender;
  books: Book[];
}
