import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  mostrarModal = false;

  productos = [
    {
      nombre: 'Laptop Gamer',
      marca: 'ASUS ROG',
      categoria: 'Electrónica',
      precio: 24999,
      stock: 12
    }
  ];

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}