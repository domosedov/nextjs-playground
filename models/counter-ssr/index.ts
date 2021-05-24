import { app } from "../domain";

export const $count = app.createStore({ counter: 0 });

export const inc = app.createEvent();
export const dec = app.createEvent();
