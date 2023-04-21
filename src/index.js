import './css/styles.css';
import{fetchCountries} from './service/api';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;


const inputEl=document.querySelector('#search-box')
const listEl=document.querySelector('.country-list')
const containerEl=document.querySelector('.country-info')

inputEl.addEventListener('input',debounce(onInputCountry,DEBOUNCE_DELAY))

function onInputCountry(event){

const countryName=event.target.value.trim();

if(countryName===""){
    listEl.innerHTML='';
    containerEl.innerHTML='';
    return;
}
   fetchCountries(countryName)
    .then(data=>{
        
        if(data.length>10){
            listEl.innerHTML=''
            Notify.info("Too many matches found. Please enter a more specific name.");
        }
        if (data.length===1){
            listEl.innerHTML=''
            containerEl.innerHTML=markupContainerEl(data);
            

        }
        if(data.length>1){
            containerEl.innerHTML='';
            
        }
        if(data.length>=2 && data.length<10 ){
            listEl.innerHTML=markupalist(data);
            
        }
    })
    .catch(clearMarkup);
  

}

 
function markupalist (arr){
return arr.map(({flags:{svg},name:{common}})=>
`<li class="item">
<img src="${svg}" alt="${common}" width="50px" height="50px">
<h2>${common}</h2>
</li>`).join('')
}



function markupContainerEl(arr){
  
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
function clearMarkup(){
    listEl.innerHTML= '';
    containerEl.innerHTML='';
    Notify.failure('Oops, there is no country with that name')

}







