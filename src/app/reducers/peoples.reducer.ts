// interface
import { People } from '../modules/register/models/people.interface';

// enum
export enum PEOPLE_ACTION {
  ADD = 'ADD'
}

// reducer, conforme a action faz o dispatch para a store
export function peopleReducer(state: People[] = [], action) {
  switch(action?.type) {
    case PEOPLE_ACTION.ADD:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
