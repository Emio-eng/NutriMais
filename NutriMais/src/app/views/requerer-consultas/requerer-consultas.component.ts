import { Router } from '@angular/router';
import { ConsultNutriService } from './../../services/consult-nutri.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { requestConsulta } from 'src/app/resourcers/models/requestConsulta';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-requerer-consultas',
  templateUrl: './requerer-consultas.component.html',
  styleUrls: ['./requerer-consultas.component.css']
})
export class RequererConsultasComponent implements OnInit {

  formularioConsulta:FormGroup;
  public formConsulta: requestConsulta;


  constructor(private http:ConsultNutriService, private router:Router) { }

  ngOnInit(): void {
    this.formConsulta = new requestConsulta();
    this.formularioConsulta = new FormGroup({
      peso_atual: new FormControl('',[Validators.required]),
      quantidade_refeicoes: new FormControl('',[Validators.required]),
      quantidade_refeicoes_almejadas: new FormControl('',[Validators.required]),
      refeicoes: new FormControl('',[Validators.required]),
      valor_disponivel: new FormControl('',[Validators.required]),
      rotina: new FormControl('',[Validators.required]),
      alimentos_favoritos: new FormControl('',[Validators.required]),
      alimentos_nao_desejaveis: new FormControl('',[Validators.required]),
      alergias: new FormControl('',[Validators.required]),
      exercicio_fisico: new FormControl('',[Validators.required]),
      restricao_medica: new FormControl('',[Validators.required]),
      consumo_agua: new FormControl('',[Validators.required]),
      objetivo: new FormControl('',[Validators.required])

    })
  }
  public enviarConsulta() :void{
    if(this.formularioConsulta.invalid){
      return;
    }
    this.http.enviarConsulta(this.formConsulta).subscribe(
      (()=> {
        this.router.navigateByUrl('/feed')
      })
    )
  }

}
