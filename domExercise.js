const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

container.appendChild(blueText);

const pinkDiv = document.createElement("div");
pinkDiv.style["background-color"] = "pink";
pinkDiv.style.border = "black solid 4px";

container.appendChild(pinkDiv);

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";
pinkDiv.appendChild(divHeader);

const divText = document.createElement("p");
divText.textContent = "ME TOO!";
pinkDiv.appendChild(divText);

const btn = document.createElement("button");
btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
});
pinkDiv.appendChild(btn);