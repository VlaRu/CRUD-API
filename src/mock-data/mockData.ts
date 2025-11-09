import {User} from '../utils/types.js';
import { v4 as uuidv4 } from 'uuid';

export const mockUsers: User[] = [
  {
    id: uuidv4(),
    username: 'Alice',
    age: 28,
    hobbies: ['reading', 'hiking'],
  },
  {
    id: uuidv4(),
    username: 'Bob',
    age: 34,
    hobbies: ['cooking', 'gaming'],
  },
  {
    id: uuidv4(),
    username: 'Charlie',
    age: 22,
    hobbies: ['swimming', 'cycling'],
  },
  {
    id: uuidv4(),
    username: 'Diana',
    age: 30,
    hobbies: ['painting', 'traveling'],
  },
];