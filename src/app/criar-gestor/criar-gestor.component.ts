import { GestorService } from '../gestor.service';
import { Gestor } from '../Gestor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-gestor',
  templateUrl: './criar-gestor.component.html',
  styleUrls: ['./criar-gestor.component.css']
})
export class CriarGestorComponent implements OnInit {

  gestor: Gestor = new Gestor();
  submitted = false;

  constructor(private gestorService: GestorService,
    private router: Router) { }

  ngOnInit() {
  }

  novoGestor(): void {
    this.submitted = false;
    this.gestor = new Gestor();
  }

  save() {
    this.gestorService.createGestor(this.gestor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gestor = new Gestor();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/gestores']);
  }
}