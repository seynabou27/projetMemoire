import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './layout/main-content/main-content.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '',
    pathMatch:'full'
  },
  {
    path:'',
    component: MainContentComponent,
    children: [
      {
        //path: 'applications',
        //loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule)

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
