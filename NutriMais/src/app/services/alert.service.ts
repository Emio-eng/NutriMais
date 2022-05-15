import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message:string):void{
    this.showrAlert(message,'success');
  }
  public error(message:string):void{
    this.showrAlert(message,'error');
  }

  private showrAlert(message:string,icon:SweetAlertIcon):void{
    Swal.fire(message,icon)

  }
}
