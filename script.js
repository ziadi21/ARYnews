function initial(){

	$.ajax({
		url:"https://newsapi.org/v2/everything?sources=ary-news&apiKey=619ec9cb281d4a7992835acdebdf0f07",
		success: function(data){
			console.log(data);
			for(i=0; i<7; i++){
				document.querySelector(".main-container").innerHTML +=
				`<div>
				<h1> ${data.articles[i].title}</h1>
				<p> ${data.articles[i].description}</p>
				</div>
				<div class="head-line">
				<span class="news-image" style="background-image:url(${data.articles[i].urlToImage});"><span>
				<div class="border-set"></div>

				</div>`

			}
		}

	})
}
