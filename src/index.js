import './css/styles.css';
import { markupalist, markupContainerEl } from './function.js/marcup'
import{clearMarkup} from './function.js/clear'
import{fetchCountries} from './service/api';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;


const inputEl=document.querySelector('#search-box')
export const listEl=document.querySelector('.country-list')
export const containerEl=document.querySelector('.country-info')

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

 













