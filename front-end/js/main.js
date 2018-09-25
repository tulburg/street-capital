window.Element.prototype.$ = window.$ = function(id) {
	if(id[0] == ".") return (this instanceof Element) ? (this.getElementsByClassName(id.substring(1)).length == 1) ? this.getElementsByClassName(id.substring(1))[0] : this.getElementsByClassName(id.substring(1)) : (document.getElementsByClassName(id.substring(1)).length == 1) ? document.getElementsByClassName(id.substring(1))[0] : document.getElementsByClassName(id.substring(1));
	if(id[0] == "#") return (this instanceof Element) ? this.getElementById(id.substring(1)) : document.getElementById(id.substring(1));
	if(id[0] == ">") return (this instanceof Element) ? (this.getElementsByTagName(id.substring(1)).length == 1) ? this.getElementsByTagName(id.substring(1))[0] : this.getElementsByTagName(id.substring(1)) : (document.getElementsByTagName(id.substring(1)).length == 1) ? document.getElementsByTagName(id.substring(1))[0] : document.getElementsByTagName(id.substring(1));
	return undefined;
}
window.Element.prototype.toggleClass = function(className) {
	if(this.className.match(className)) {
		this.className = this.className.replace(className, '').trim();
	}else {
		this.className = this.className+" "+className;
	}
}
window.onload = function() {
	$(".login").onclick = $(".logout").onclick = () => { 
		$(".logout").toggleClass('active');
		$(".login").toggleClass('active');
	}
}