function cariTerbesar(a,b){
	if (a>b) {
		return a
	}else if (a==b){
		return "Nilainya Sama "
	}else {
		return b
	}
}

let hasil = cariTerbesar(8,8)

console.log(hasil)