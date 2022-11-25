const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"X-RapidAPI-Key": "cfee2af735msh70ad5cf9916eafep1d1384jsn981a262062b5",
		"X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com"
	},
	"data": {
		"text": "great value in its price range!"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});