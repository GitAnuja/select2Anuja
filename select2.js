$.fn.select2 = function(){
	select2.create(this);
}

var select2 = {
	create : function(select){
		if(select.constructor.name == "HTMLSelectElement"){
			this.createContainer(select);
		}
		else{
			for(var i=0; i<select.length; i++){
				this.create(select[i]);
			}
		}
	},
	createContainer : function(select){
		var span = document.createElement("span");
		span.id = select.id+"-select2";
		span.className = select.className+" select2-container";
		select.parentElement.append(span);
		span.innerText = select.value;
		span.style.left = select.offsetLeft;
		span.style.top = select.offsetTop;
		select.style.display = "none";
	}
}