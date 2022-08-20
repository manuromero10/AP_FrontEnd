import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from 'src/app/guards/validate-session.guard';
import { EditHomeComponent } from './pages/edit-home/edit-home.component';

const routes: Routes = [
  {
    path:'edit',
    component:EditHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditContRoutingModule { }
