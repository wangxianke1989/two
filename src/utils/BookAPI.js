

let token = localStorage.token
if(!token){
	token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
	'Accept':'application/json',
	'Athorization':token
}

export const get_jd_hot =()=>
	fetch('/api/v1/jd/hot/10',{method:'GET',headers})
	.then(res => res.json())

export const search_jd = (keyword)=>
	fetch(`/api/v1/jd_pp/search/${keyword}/3`,{headers})
	.then(res=>res.json())

export const get_dd_hot =()=>fetch('/api/v1/dd/hot/10',{method:'GET',headers})
	.then(res=>res.json())
export const get_dk_hot =()=>fetch('/api/v1/duokan/hot/10',{method:'GET',headers})
	.then(res=>res.json())