import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

import { add } from 'https://dev.jspm.io/npm:lodash-es';

console.log(add(1, 2))

await Promise.resolve(1);

const s = serve({ port: 8000 });

console.log("http://localhost:8000/")

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
