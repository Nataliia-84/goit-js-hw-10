import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { listEl } from '../index';
import { containerEl } from '../index';
export function clearMarkup() {
    listEl.innerHTML= '';
    containerEl.innerHTML='';
    Notify.failure('Oops, there is no country with that name')

}