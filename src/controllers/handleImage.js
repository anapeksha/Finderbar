const handleImage = (image) => {
	if (image !== null) {
		return `https://image.tmdb.org/t/p/w500${image}`;
	} else
		return "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";
};

export default handleImage;
