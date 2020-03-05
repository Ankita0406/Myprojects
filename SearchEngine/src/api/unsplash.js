import axios from "axios";




export default axios.create({
	baseURL: "https://api.unsplash.com" ,

	header :{

			Authorization: "Client-ID 75dcb6a3fb2537cbd1bd18a953300e07a9a042c12187f57635f8b475d0ba67b1" 
		}

	});



