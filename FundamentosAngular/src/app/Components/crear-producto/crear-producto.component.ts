import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/Models/Producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{

  productosForm: FormGroup;
  titulo = "Crear Producto";
  id: string | null;
  // verificar = false;

  constructor(private form: FormBuilder, private productosService: ProductosService, private route: ActivatedRoute, private router: Router) {
    this.productosForm = this.form.group({
      nombreProducto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.datosEditarProducto();
  }

  agregarProducto(){

    const producto: IProducto = {
      nombreProducto: this.productosForm.get('nombreProducto')?.value,
      categoria: this.productosForm.get('categoria')?.value,
      ubicacion: this.productosForm.get('ubicacion')?.value,
      precio: this.productosForm.get('precio')?.value
    }

    if(this.id !== null){
      this.productosService.editarProducto(this.id, producto).subscribe(data => {
        this.router.navigate(['/']);
      })
    }else{
      this.productosService.crearProducto(producto).subscribe(data => {
        this.productosForm.reset();
      });
    }
  }

  datosEditarProducto(){
    if(this.id !== null){
      this.titulo = "Actualizar Producto";
      this.productosService.obtenerProducto(this.id).subscribe(data => {
        this.productosForm.setValue({
          nombreProducto: data.nombreProducto,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }
}
