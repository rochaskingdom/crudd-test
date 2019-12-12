import { Component, OnInit } from '@angular/core';
import { Gestor } from '../Gestor';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorService } from '../gestor.service';

@Component({
  selector: 'app-atualizar-gestor',
  templateUrl: './atualizar-gestor.component.html',
  styleUrls: ['./atualizar-gestor.component.css']
})
export class AtualizarGestorComponent implements OnInit {

  id: number;
  gestor: Gestor;

  constructor(private route: ActivatedRoute,private router: Router,
    private gestorService: GestorService) { }

  ngOnInit() {
    this.gestor = new Gestor();

    this.id = this.route.snapshot.params['id'];
    
    this.gestorService.getGestor(this.id)
      .subscribe(data => {
        console.log(data)
        this.gestor = data;
      }, error => console.log(error));
  }

  updateGestor() {
    this.gestorService.updateGestor(this.id, this.gestor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gestor = new Gestor();
    this.gotoList();
  }

  onSubmit() {
    this.updateGestor();    
  }

  gotoList() {
    this.router.navigate(['/gestores']);
  }
}