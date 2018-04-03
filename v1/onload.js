$(document).ready(function(){
	$("#selectbox").select2({
		//ajax : {
		//	url : 'http://localhost:3000/options1'
		//},
		//closeOnSelect : true,
		//data : ["anuja", "bill", "call"],
		//data : [{value : "anuja", text : "a"}, {value : "bill", text : "b"}],
		//disabled : true,
		//containerCss : {"background-color" : "blue"},
		containerCssClass : "test",
		dropdownCss : {"background-color" : "red"},
		dropdownCssClass : "test"
	});
});