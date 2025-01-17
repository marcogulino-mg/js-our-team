//Functions

//Funzione che prepara i membri del team
//da aggiungere all'inserimento nell'HTML
function createTeamMembers(object) {
  const { name, role, img, email } = object;

  let html = `
    <div class="card">
              <img src="${object.img}" alt="${teamMembers.name}" />
              <div class="description">
                <h3>${object.name}</h3>
                <span class="occupation">${object.role}</span>
                <a href="" class="email">${object.email}</a>
              </div>
            </div>
   `;

  return html;
}

//Lista dei membri del team
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png",
  },

  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png",
  },

  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png",
  },

  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png",
  },

  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png",
  },

  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png",
  },
];

//Elementi in OUTPUT del DOM
const cardsContainer = document.getElementById("cards-container");

for (let i = 0; i < teamMembers.length; i++) {
  cardsContainer.innerHTML += createTeamMembers(teamMembers[i]);
}