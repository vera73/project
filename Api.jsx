import { useEffect } from "react";

const Api = () => {
    useEffect(() => {
        const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-key': '6f516883d8msh688aa32005e1140p171821jsn07a77d382ebf',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
        
    })
}
return(
	<div>{result}</div>
)
