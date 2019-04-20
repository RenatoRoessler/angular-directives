import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name = '';
  address: '';
  phone: '';
  city: '';
  age = 0;
  cidades = [
    {name: 'Sao Paulo', state: 'SP'},
    {name: 'Passo Fundo', state: 'RS'},
    {name: 'Caçapava', state: 'SC'},
    {name: 'Carazinho', state: 'RS'}
  ];

  clientes = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clientes.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.cidades,
        age: this.age
      }
    );
    this.cancel();
    console.log( this.clientes);
  }

  cancel() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  }

  delete(i: number) {
    this.clientes.splice(i, 1);
  }
}
