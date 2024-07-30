const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
	{
		"id": 8,
		"name": "Udaipur",
		"info": "Udaipur is a city in the Indian state of Rajasthan, known for its beautiful lakes, palaces, and temples. The city is often called the 'City of Lakes' and is a popular tourist destination.",
		"image": "https://cdn.thecodehelp.in/Udaipur.jpeg",
		"price": "75,495"
	},
	{
		"id": 9,
		"name": "Mumbai",
		"info": "Mumbai, formerly known as Bombay, is the capital city of the Indian state of Maharashtra. It is the financial, commercial, and entertainment hub of India.",
		"image": "https://cdn.thecodehelp.in/Mumbai.jpeg",
		"price": "95,595"
	},
	{
		"id": 10,
		"name": "Delhi",
		"info": "Delhi is the capital city of India, known for its rich history, cultural heritage, and vibrant markets. It is a bustling metropolis with a mix of modern and historic architecture.",
		"image": "https://cdn.thecodehelp.in/Delhi.jpeg",
		"price": "80,000"
	},
	{
		"id": 11,
		"name": "Hyderabad",
		"info": "Hyderabad is the capital city of the Indian state of Telangana, known for its historic sites, including the Charminar and Golconda Fort, as well as its culinary delights.",
		"image": "https://cdn.thecodehelp.in/Hyderabad.jpeg",
		"price": "72,345"
	},
	{
		"id": 12,
		"name": "Chennai",
		"info": "Chennai is the capital city of the Indian state of Tamil Nadu, known for its cultural heritage, temples, and vibrant arts scene. It is a major center for music, dance, and cinema.",
		"image": "https://cdn.thecodehelp.in/Chennai.jpeg",
		"price": "70,995"
	},
	{
		"id": 13,
		"name": "Bengaluru",
		"info": "Bengaluru, also known as Bangalore, is the capital city of the Indian state of Karnataka. It is known as the 'Silicon Valley of India' due to its role as the nation's leading IT exporter.",
		"image": "https://cdn.thecodehelp.in/Bengaluru.jpeg",
		"price": "85,000"
	},
	{
		"id": 14,
		"name": "Pune",
		"info": "Pune is a city in the Indian state of Maharashtra, known for its educational institutions, cultural heritage, and vibrant nightlife. It is often referred to as the 'Oxford of the East'.",
		"image": "https://cdn.thecodehelp.in/Pune.jpeg",
		"price": "65,995"
	},
	{
		"id": 15,
		"name": "Amritsar",
		"info": "Amritsar is a city in the Indian state of Punjab, known for the Golden Temple, a significant pilgrimage site for Sikhs. It is also known for its rich history and cultural heritage.",
		"image": "https://cdn.thecodehelp.in/Amritsar.jpeg",
		"price": "68,000"
	},
	{
		"id": 16,
		"name": "Kolkata",
		"info": "Kolkata, formerly known as Calcutta, is the capital city of the Indian state of West Bengal. It is known for its colonial architecture, cultural festivals, and literary heritage.",
		"image": "https://cdn.thecodehelp.in/Kolkata.jpeg",
		"price": "73,500"
	},
	{
		"id": 17,
		"name": "Ahmedabad",
		"info": "Ahmedabad is a city in the Indian state of Gujarat, known for its textile industry, historical sites, and vibrant culture. It is also home to the Sabarmati Ashram, associated with Mahatma Gandhi.",
		"image": "https://cdn.thecodehelp.in/Ahmedabad.jpeg",
		"price": "69,995"
	},
	{
		"id": 18,
		"name": "Lucknow",
		"info": "Lucknow is the capital city of the Indian state of Uttar Pradesh, known for its Mughal and British-era architecture, as well as its rich cultural heritage and cuisine.",
		"image": "https://cdn.thecodehelp.in/Lucknow.jpeg",
		"price": "67,495"
	},
	{
		"id": 19,
		"name": "Bhopal",
		"info": "Bhopal is the capital city of the Indian state of Madhya Pradesh, known for its lakes, green spaces, and historical sites. It is often referred to as the 'City of Lakes'.",
		"image": "https://cdn.thecodehelp.in/Bhopal.jpeg",
		"price": "64,500"
	},
	{
		"id": 20,
		"name": "Srinagar",
		"info": "Srinagar is the largest city and summer capital of the Indian union territory of Jammu and Kashmir. It is known for its beautiful gardens, lakes, and houseboats.",
		"image": "https://cdn.thecodehelp.in/Srinagar.jpeg",
		"price": "77,000"
	}
	
];

export default data;
