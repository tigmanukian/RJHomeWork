

// import text,{ textAder}  from "./util/capital.js";

import  { textAder ,text } from "./util/index.js";

const name = "aohn";

const h1 = document.createElement('h1');

h1.textContent = `${text(name)} ${textAder}`;

document.body.append(h1);
