const bg = [
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

const slides = document.querySelectorAll(".slid");

slides.forEach((slid, idx) => {
  slid.style.backgroundImage = `url("${bg[idx]}")`;

  slid.addEventListener("click", (e) => {
    slides.forEach((slid) => {
      slid.classList.remove("act");
    });
    e.currentTarget.classList.add("act");
  });
});