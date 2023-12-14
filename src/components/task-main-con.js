import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';

//контейнер листов задач
function createTaskMainCon() {
    return (
        `<section class="taskCardCon">     </section>`
      );
}


export class TaskMainCon extends AbstractComponent{
  getTemplate() {
    return createTaskMainCon();
  }
}