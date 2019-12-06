import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';

@NgModule({
	imports: [ CommonModule, CartRoutingModule ],
	exports: [ CartComponent ],
	declarations: [ CartComponent ],
	providers: []
})
export class CartModule {}
