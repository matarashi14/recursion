function createUserProfile(user) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10");

  let card = document.createElement("div");
  innerFlex.append(card);

  card.classList.add(
    "d-flex",
    "col-12",
    "bg-white",
    "p-3",
    "border",
    "border-black",
    "border-2",
    "rounded-3"
  );

  // making left side of card
  let left_text = document.createElement("div");
  left_text.classList.add("col-8", "py-3");
  card.append(left_text);

  let name = document.createElement("h4");
  name.innerHTML = user.getFullName();

  let div1 = document.createElement("div");
  div1.classList.add("py-2");
  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);

  let job = document.createElement("p");
  let skill = document.createElement("p");
  let country = document.createElement("p");

  job.innerHTML = "Job: " + "<br>" + user.job;
  div1.append(job);

  let skills_string = "Skill: <br>";
  for (let i = 0; i < user.skills.length; i++) {
    skills_string += user.skills[i] + ", ";
  }

  skill.innerHTML = skills_string;
  div2.append(skill);

  country.innerHTML = "Country : " + "<br>" + user.country;
  div3.append(country);

  left_text.append(name, div1, div2, div3);

  // making right side image

  let right_img = document.createElement("div");
  card.append(right_img);
  right_img.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  let avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = user.avatarUrl;

  let div4 = document.createElement("div");
  div4.append(avatar);
  right_img.append(div4);

  return innerFlex;
}

class User {
  constructor(fname, lname, job, skills, country, avatarUrl) {
    this.fname = fname;
    this.lname = lname;
    this.job = job;
    this.skills = skills;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return this.fname + " " + this.lname;
  }
}

let user1_skills = ["C++", "C#", "Java", "PHP", "JavaScript", "Python"];

let user1 = new User(
  "Kaiden",
  "Herman",
  "Software Engineer",
  user1_skills,
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);

let user2_skills = ["Excel", "Word", "Quickbooks"];
let user2 = new User(
  "Elizabeth",
  "Dunn",
  "Accountant",
  user2_skills,
  "England",
  "https://randomuser.me/api/portraits/women/76.jpg"
);

let user3_skills = ["Working with children", "History", "Word"];

let user3 = new User(
  "Duan",
  "Moreno",
  "Teacher",
  user3_skills,
  "Argentina",
  "https://randomuser.me/api/portraits/med/men/93.jpg"
);

document.getElementById("profiles").append(createUserProfile(user1));

document.getElementById("profiles").append(createUserProfile(user2));

document.getElementById("profiles").append(createUserProfile(user3));
