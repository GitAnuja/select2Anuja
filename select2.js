$.fn.select2 = function(){
	createContainer(this);
}

function createContainer(ele){
	var con = document.createElement("span");
	con.id = "select2-"+ele[0].id+"-container";
	con.innerText = ele[0].value;
	con.className = "select2-container";
	con.onclick = function(){
		if(!document.getElementById("select2-"+ele[0].id+"-dropdown")){
			createDropdown(ele);		
		}
	}
	con.style.height = ele.css("height");
	con.style.width = ele.css("width");
	var arrow = document.createElement("i");
	arrow.className = "select2-arrow";
	con.append(arrow);
	ele.parent().append(document.createElement("br"));
	ele.parent().append(document.createElement("br"));
	ele.parent().append(document.createElement("br"));
	ele.parent().append(con);
}

function createDropdown(ele){
	var drop = document.createElement("span");
	drop.id = "select2-"+ele[0].id+"-dropdown";	
	drop.className = "select2-dropdown";
	var con = $("#select2-"+ele[0].id+"-container");
	drop.style.top = (con.offset().top+con.height())+"px";
	drop.style.left = con.offset().left;
	drop.style.width = con.width();
	createInput(drop);
	createResult(ele, drop);
	document.body.append(drop);
}

function createInput(ele){
	var search = document.createElement("span");
	search.className = "select2-search";
	var input = document.createElement("input");
	input.className = "select2-input";
	search.append(input);
	ele.append(search);
}

function createResult(ele, drop){
	var res = document.createElement("span");
	res.className = "select2-result";
	var ul = document.createElement("ul");
	res.append(ul);
	var options = ele[0].options;
	for(var i=0; i<options.length; i++){
		var li = document.createElement("li");
		li.setAttribute("data-value", options[i].value);
		li.innerText = options[i].text;
		ul.append(li);
	}
	drop.append(res);
}