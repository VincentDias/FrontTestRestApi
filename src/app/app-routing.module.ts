import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'inventory', component: InventoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
