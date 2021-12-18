const finFlag = document.querySelector("#finnish-flag");
const ukFlag = document.querySelector("#uk-flag");
const quoteText = document.querySelector("#quote");

finFlag.onclick = function() {
    quoteText.textContent='"Ihmiskunnan vapaus ei piile siinä, että voimme tehdä mitä haluamme, vaan siinä, että meidän ei tarvitse tehdä sitä, mitä emme halua."';
}

ukFlag.onclick = function() {
    quoteText.textContent='"The freedom of Mankind does not lie in the fact that we can do what we want, but that we do not have to do that which we do not want."';
}
