const apiURL = "https://nf-api.onrender.com/api/v1/cat-facts/";

export async function app() {
  const response = await fetch(apiURL);

  const facts = await response.json();

  facts.forEach((facts) => {
    const item = document.createElement("div");
    item.innerText = facts.text;
    document.body.append(item);
  });
  return "App Ready!";
}

app().then(console.log);
