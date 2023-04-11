import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IProducto } from '../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = "http://localhost:3000/api/producto";



  constructor(private http: HttpClient) { }

  getProductos() : Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.url);
  }

  crearProducto(producto: IProducto): Observable<IProducto>{
    return this.http.post<IProducto>(this.url, producto);
  }

  obtenerProducto(id: string): Observable<IProducto>{
    return this.http.get<IProducto>(this.url + "/" + id);
  }

  editarProducto(id: string, producto: IProducto) : Observable<IProducto>{
    return this.http.put<IProducto>(this.url + "/" + id, producto);
  }

  deleteProducto(id?: string) : Observable<IProducto>{
    return this.http.delete<IProducto>(this.url + "/" + id);
  }
}
