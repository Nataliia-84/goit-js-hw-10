export function markupalist (arr){
return arr.map(({flags:{svg},name:{common}})=>
`<li class="item">
<img src="${svg}" alt="${common}" width="50px" height="50px">
<h2>${common}</h2>
</li>`).join('')
}

export function markupContainerEl(arr){
  
 return arr.map(({flags:{svg},name:{official},population,capital,languages}) =>{
    
return `
<div class="container">
<img src="${svg}" alt="${official}" width="50px" height="50px">
<h2>${official}</h2>
</div>
<h3><b>Capital:</b> ${capital}</h3>
<p><b>Population:</b> ${population}</p>
<p><b>Languages:</b> ${Object.values(languages).join(', ')}</p>`}).join('')
 
}