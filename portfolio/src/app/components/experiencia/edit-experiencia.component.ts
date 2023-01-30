import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab:Experiencia = null;
  constructor(private sexp:SExperienciaService ,private activateRouter:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sexp.detail(id).subscribe(
      data=>{
        this.expLab=data;
      },err =>{
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.sexp.update(id,this.expLab).subscribe(
      data=>{
        alert("experiencia modificada");
        this.router.navigate(['']);
      },err =>{
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      })


  }


}
