import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProducto } from 'src/app/Models/Producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  productosForm: FormGroup;

  constructor(private form: FormBuilder){
    this.productosForm = this.form.group({
      nombreProducto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  agregarProducto(){
    // console.log(this.productosForm);

    const producto: IProducto = {
      nombre: this.productosForm.get('nombreProducto')?.value,
      categoria: this.productosForm.get('categoria')?.value,
      ubicacion: this.productosForm.get('ubicacion')?.value,
      precio: this.productosForm.get('precio')?.value
    }

    console.log(producto);
  }
}
