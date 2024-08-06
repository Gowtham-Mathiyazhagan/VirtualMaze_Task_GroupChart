// mobile responsive fuction for aside bar
const mobileMenu = document.querySelector(".fa-bars");
const mobileClose = document.querySelector(".fa-xmark");
const overley = document.querySelector(".overley");
const asideBar = document.querySelector(".aside-container");

mobileMenu.addEventListener("click", () => {
  asideBar.classList.add("mobile-active");
  overley.classList.add("active");
});
mobileClose.addEventListener("click", () => {
  asideBar.classList.remove("mobile-active");
  overley.classList.remove("active");
});

overley.addEventListener("click", () => {
  asideBar.classList.remove("mobile-active");
  overley.classList.remove("active");
});

// aside bar
const sideBarData = [
  { img: "/assets/img1.jpg", name: "ram" },
  { img: "/assets/img2.jpg", name: "akshay kumar" },
  { img: "/assets/img3.jpg", name: "vijay" },
  { img: "/assets/img4.jpg", name: "hrithick roshan" },
  { img: "/assets/img5.jpg", name: "rajinikanth" },
  { img: "/assets/img6.jpg", name: "yash" },
  { img: "/assets/img7.jpg", name: "suriya" },
  { img: "/assets/img8.jpg", name: "dhanush" },
  { img: "/assets/img9.jpg", name: "mahesh babu" },
  { img: "/assets/img10.jpg", name: "Prithviraj" },
];

let asideSection = document.querySelector(".aside-section");

sideBarData.map((data) => {
  let append = "";

  append = `
	<div class="detail-of-user">
            <figure>
              <img src=${data.img} alt="img" />
            </figure>
            <span>${data.name}</span>
          </div>
	`;
  asideSection.innerHTML += append;
});

// section data

const sectionData = [
  {
    img: "/assets/img1.jpg",
    msg: "Hi bro how are you",
    date: "6-7 12:51",
    name: "ram",
  },
  {
    img: "/assets/img2.jpg",
    msg: "Just checking in—hope everything's good with you!",
    date: "6-7 12:52",
    name: "akshay kumar",
  },
  {
    img: "/assets/img3.jpg",
    msg: "Long time no chat! What's new with you?",
    date: "6-7 12:53",
    name: "vijay",
  },
  {
    img: "/assets/img4.jpg",
    msg: "Guess what? I saw someone today who looks just like you... oh wait, it was a mirror!",
    date: "6-7 12:54",
    name: "hrithick roshan",
  },
  {
    img: "/assets/img5.jpg",
    msg: "My bed and I are perfect for each other, but my alarm clock keeps trying to break us up.",
    date: "6-7 12:55",
    name: "rajinikanth",
  },
  {
    img: "/assets/img6.jpg",
    msg: "If we ever go to jail together, just know I’ll be the one to bail us out... or at least try. 😂",
    date: "6-7 12:56",
    name: "yash",
  },
  {
    img: "/assets/img7.jpg",
    msg: "Is it too late to start the day over? Asking for a friend.",
    date: "6-7 12:57",
    name: "suriya",
  },
  {
    img: "/assets/img8.jpg",
    msg: "Just wanted to let you know I'm thinking about you.",
    date: "6-7 12:58",
    name: "dhanush",
  },
  {
    img: "/assets/img9.jpg",
    msg: "You crossed my mind today, hope all is well!",
    date: "6-7 12:59",
    name: "mahesh babu",
  },
  {
    img: "/assets/img10.jpg",
    msg: "If you ever need to talk, I'm here for you.",
    date: "6-7 1:00",
    name: "Prithviraj",
  },
];

let msgPannel = document.querySelector(".msg-pannel");

sectionData.map((data) => {
  let append = "";

  append = `
	<div class="chat">
            <img src=${data.img} alt="img" />
            <div class="name-date-msg">
              <div class="name-date">
                <span>${data.name}</span>

                <div class="date">${data.date}</div>
              </div>
              <div class="text">
			  ${data.msg}
              </div>
            </div>
          </div>
	`;
  msgPannel.innerHTML += append;
});
