import { People } from '../modules/register/models/people.interface';

export enum PEOPLE_ACTION {
  ADD = 'ADD'
}

export function peopleReducer(state: People[] = [], action) {
  switch(action?.type) {
    case PEOPLE_ACTION.ADD:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
