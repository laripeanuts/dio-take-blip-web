const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const BASE_URL = "https://api.thecatapi.com/v1/images/search/"

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message + "Erro carregar");
	}
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  img.src = await getCats();
};

const btn = document.getElementById("change-cat");
btn.addEventListener("click", loadImg);

loadImg();
