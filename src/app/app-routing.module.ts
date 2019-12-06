import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { AboutModule } from './about/about.module';

const routes: Routes = [
	{
		path: 'cart',
		loadChildren: () => import(`./cart/cart.module`).then((m) => m.CartModule)
	},
	{
		path: 'about',
		loadChildren: () => import(`./about/about.module`).then((m) => m.AboutModule)
	},
	{
		path: '**',
		component: AppComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
