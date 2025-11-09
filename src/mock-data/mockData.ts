import {User} from '../utils/types.js';
import { v4 as uuidv4 } from 'uuid';

export const mockUsers: User[] = [
  {
    id: uuidv4(),
    name: 'Alice',
    age: 28,
    hobbies: ['reading', 'hiking'],
  },
  {
    id: uuidv4(),
    name: 'Bob',
    age: 34,
    hobbies: ['cooking', 'gaming'],
  },
  {
    id: uuidv4(),
    name: 'Charlie',
    age: 22,
    hobbies: ['swimming', 'cycling'],
  },
  {
    id: uuidv4(),
    name: 'Diana',
    age: 30,
    hobbies: ['painting', 'traveling'],
  },
];