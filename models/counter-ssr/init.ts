import { $count, dec, inc } from ".";

$count
  .on(inc, (c) => ({ ...c, counter: c.counter + 1 }))
  .on(dec, (c) => ({ ...c, counter: c.counter - 1 }));
