import './css/styles.css';
import{fetchCountries} from './service/api';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;


const inputEl=document.querySelector('#search-box')
const listEl=document.querySelector('.country-list')
const containerEl=document.querySelector('.country-info')

inputEl.addEventListener('input',debounce(onInputCountry,DEBOUNCE_DELAY))

function onInputCountry(event){

const countryName=event.target.value;

   fetchCountries(countryName)
    .then(data=>{
        if(data.length>=2){
            listEl.innerHTML=markupalist(data)
        }
        else{
            listEl.innerHTML= ''
            containerEl.innerHTML=markupContainerEl(data)
        }
    })
    .catch(error=>console.log(error));

}


function markupalist (arr){
return arr.map(({flags:{svg},name:{common}})=>
`<li class="item">
<img src="${svg}" alt="${common}" width="50">
<h2>${common}</h2>
</li>`).join('')
}



function markupContainerEl(arr){
  
 return arr.map(({flags:{svg},name:{official},population,capital,languages}) =>{
    
return `<div class="country-info">
<img src="${svg}" alt="${official}" width="150px">
<h2>${official}</h2>
<h3>Capital: ${capital}</h3>
<p>Population: ${population}</p>
<p>Languages: ${Object.values(languages).join(', ')}</p>`}).join('')
 
}








