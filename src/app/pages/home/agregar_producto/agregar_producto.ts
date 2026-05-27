import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  imports: [],
  templateUrl: './agregar_producto.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgregarProducto {}
