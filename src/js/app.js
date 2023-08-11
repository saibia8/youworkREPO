const apiURL = "https://nf-api.onrender.com/api/v1/cat-facts/";

export async function getCatFacts() {
  const response = await fetch(apiURL);
  return await response.json();
}
export function createCatFactHTML(fact) {
  const item = document.createElement("div");
  item.innerText = fact.text;
  return item;
}
export function createCatFactsHtml(facts) {
  const factsHTML = facts.map(createCatFactHTML);
  document.body.append(...factsHTML);
}
export async function app() {
  const facts = await getCatFacts();
  createCatFactsHtml(facts);
  return "App Ready!";
}

app().then(console.log);

// export async function app() {
//   const response = await fetch(apiURL);

//   const facts = await response.json();

//   facts.forEach((facts) => {
//     const item = document.createElement("div");
//     item.innerText = facts.text;
//     document.body.append(item);
//   });
//   return "App Ready!";
// }

// app().then(console.log);
