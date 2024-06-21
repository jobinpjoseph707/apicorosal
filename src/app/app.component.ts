import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// [x: string]: any;
  title = 'Jobin';
  // email:string="";
// productsData: any;
// products: any;
productNames: any;
catagorys:string[]=[];
  async getData(){
    const products = await fetch('https://dummyjson.com/products')
    const productsData = await products.json();
    this.productNames = productsData.products;
    console.log(this.productNames);
    console.log(this.productNames[0].category);
    this.productNames.map((Names:any)=>{
      if(!this.catagorys.includes(Names.category)){
        this.catagorys.push(Names.category)
        // console.log(this.catagorys);
        

      }

    })
   
  }
  ngOnInit(){
    this.getData();
  }
}

