import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia :Experiencia[]=[];
  constructor(private sExpe:SExperienciaService,private tokenservice: TokenService){}
isLogged=false;

  ngOnInit(): void {
  this.cargarExperiencia();
  if(this.tokenservice.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }
  }
  cargarExperiencia():void{
    this.sExpe.lista().subscribe(data=>{this.experiencia=data;})
  }
  delete(id?:number):void{
    if(id != undefined){
      this,this.sExpe.delete(id).subscribe(
        data=>{
          alert("experiencia eliminada con exito");
          this.cargarExperiencia();
        },err =>{
          alert("No se pudo eliminar experiencia");
        }
      )
    }
  }
}
