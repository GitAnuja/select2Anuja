$.fn.select2 = function(options){
	createContainer(this, options);
}

function createContainer(ele, options){
	var con = document.createElement("span");
	con.id = "select2-"+ele[0].id+"-container";
	con.innerText = ele[0].value;
	con.className = "select2-container";
	con.onclick = function(){
		if(options.disabled){
			return;
		}
		if(!document.getElementById("select2-"+ele[0].id+"-dropdown")){
			createDropdown(ele, options);		
		}
		else{
			document.getElementById("select2-"+ele[0].id+"-dropdown").style.display = "";
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
	if(options.containerCss){
		for(var style in options.containerCss){
			con.style[style] = options.containerCss[style];
		}
	}
	ele.parent().append(con);
}

function createDropdown(ele, options){
	var drop = document.createElement("span");
	drop.id = "select2-"+ele[0].id+"-dropdown";	
	drop.className = "select2-dropdown";
	var con = $("#select2-"+ele[0].id+"-container");
	drop.style.top = (con.offset().top+con.height())+"px";
	drop.style.left = con.offset().left;
	drop.style.width = con.width();
	createInput(drop);
	createResult(ele, drop, options);
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

function createResult(ele, drop, options){
	var res = document.createElement("span");
	res.className = "select2-result";
	var ul = document.createElement("ul");
	res.append(ul);
	if(options && options.ajax){
		$.ajax({
			url : options.ajax.url,
			success : function(resp){
				if(typeof resp[0] != "object"){
					var ret = [];
					for(var i=0; i<resp.length; i++){
						ret[i] = {value : resp[i], text : resp[i]};
					}
					createOptions(ret, ul, options);
				}
				else{
					createOptions(resp, ul, options);
				}
			}
		})
	}
	else if(options && options.data){
		var resp = options.data;
		if(typeof resp[0] != "object"){
			var ret = [];
			for(var i=0; i<resp.length; i++){
				ret[i] = {value : resp[i], text : resp[i]};
			}
			createOptions(ret, ul, options);
		}
		else{
			createOptions(resp, ul, options);
		}
	}
	else{
		var options = ele[0].options;
		createOptions(options, ul);
	}
	drop.append(res);
}

function createOptions(options, ul, op){
	for(var i=0; i<options.length; i++){
		var li = document.createElement("li");
		li.setAttribute("data-value", options[i].value);
		li.innerText = options[i].text;
		li.onclick = function(){
			if(op.closeOnSelect){
				ul.parentElement.parentElement.style.display = "none";
			}
		}
		ul.append(li);
	}
}