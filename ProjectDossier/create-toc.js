var list = [];


$('h1').each(function() {
	var title = $(this).text();
	list.push(title);
});

console.log(list);

/*

- loop over h1 en h2 heen
- zet anchor tags in h1/h2
- text.toLowerCase()

*/