const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem() {

	// buang class tab-border dari semua tab-item
	for (var i = 0; i < tabItems.length; i++) {
		tabItems[i].className = 'tab-item';
	}

	//pasang class tab-border pada id terpilih
	document.getElementById(this.id).className = 'tab-item tab-border';

	// buang class show dari semua tab-content-item
	for (var j = 0; j < tabContentItems.length; j++) {
		tabContentItems[j].className = 'tab-content-item';
	}

	document.getElementById(this.id + '-content').className = 'tab-content-item show';

}

tabItems.forEach(item => item.addEventListener('click', selectItem));











