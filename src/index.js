import './style.css';

import godfatherMp3 from './metadata/the-godfather-theme-song.mp3';
import fbdMainImg from './metadata/pfp.jpg';

const landingPage = document.getElementById('landingPage');
landingPage.style.display = 'block';
//landingPage.style.display = 'none';

const closeLandingBtn = document.createElement('button');
closeLandingBtn.id = "closeLandingBtn";
closeLandingBtn.innerHTML = "STAND ON BIDNESS";
landingPage.appendChild(closeLandingBtn);


const mainPage = document.getElementById('mainPage');
mainPage.style.display = 'none';
//mainPage.style.display = 'block';

const header = document.querySelector('header');

const header_h1 = document.createElement('span');
header_h1.innerHTML = "";

const header_f = document.createElement('span');
header_f.classList.add('goldText');
header_f.innerHTML = "F";
header_h1.appendChild(header_f);
const header_eline = document.createElement('span');
header_eline.innerHTML = "eline ";
header_h1.appendChild(header_eline);
const header_b = document.createElement('span');
header_b.classList.add('goldText');
header_b.innerHTML = "B";
header_h1.appendChild(header_b);
const header_usiness = document.createElement('span');
header_usiness.innerHTML = "usiness ";
header_h1.appendChild(header_usiness);
const header_d = document.createElement('span');
header_d.classList.add('goldText');
header_d.innerHTML = "D";
header_h1.appendChild(header_d);
const header_irector = document.createElement('span');
header_irector.innerHTML = "irector";
header_h1.appendChild(header_irector);

header.appendChild(header_h1);


const main = document.querySelector('main');

const fbdPfp = document.createElement('img');
fbdPfp.id = "fbdMainImg";
fbdPfp.src = fbdMainImg;
main.appendChild(fbdPfp);

const socials = document.createElement('div');
socials.id = "socials";

const telegramBtn = document.createElement('button');
telegramBtn.id = "telegramBtn";
telegramBtn.innerHTML = "Telegram";
socials.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.id = "twitterBtn";
twitterBtn.innerHTML = "Twitter";
socials.appendChild(twitterBtn);

const chartBtn = document.createElement('button');
chartBtn.id = "chartBtn";
chartBtn.innerHTML = "Chart";
socials.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.id = "buyBtn";
buyBtn.innerHTML = "BUY";
socials.appendChild(buyBtn); 

main.appendChild(socials);


const footer = document.querySelector('footer');

const contractContainer = document.createElement('div');
contractContainer.id = "contractContainer";

const contract = document.createElement('span');
contract.innerHTML = "J1HzSWXGdebYKQoEA4qCtaimYpWiSpSPvhuUnxXdpump";
contractContainer.appendChild(contract);

const contractCopyBtn = document.createElement('button');
contractCopyBtn.innerHTML = "COPY";
contractContainer.appendChild(contractCopyBtn);

footer.appendChild(contractContainer);


document.addEventListener('DOMContentLoaded', function() {

  const audio = new Audio(godfatherMp3);
  audio.loop = true;
  audio.volume = 1.0;

  closeLandingBtn.addEventListener('click', function() {
    audio.play();
    landingPage.style.display = 'none';
    mainPage.style.display = 'block';
  });

  telegramBtn.addEventListener('click', () => window.open("https://t.me/fbdportal", "_self"));
  twitterBtn.addEventListener('click', () => window.open("https://x.com/felinebusiness", "_self"));
  chartBtn.addEventListener('click', () => window.open("https://dexscreener.com/solana/Ev6Pq1F5hxXcFVAyKdisWMLfHgvGzCNpL4G1xBaNFhNr", "_blank"));
  buyBtn.addEventListener('click', () => window.open("https://raydium.io/swap?outputMint=J1HzSWXGdebYKQoEA4qCtaimYpWiSpSPvhuUnxXdpump", "_blank"));

  const textToCopy = contract.innerHTML;
  contractCopyBtn.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

});