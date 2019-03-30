// TASKS
const mongoTask = `[Task Mongo DB]`;

let setDataID = setTimeout(() => {
  console.log(`${mongoTask}: populando base de dados`);
  console.log(`${mongoTask}: ${Date()}`);
  clearTimeout(setDataID);
}, 3000);


let updateDataID = setInterval(() => {
  console.log(`${mongoTask}: atualizando base de dados`);
  console.log(`${mongoTask}: periodo 4 min: ${Date()}`);
}, 240000);
