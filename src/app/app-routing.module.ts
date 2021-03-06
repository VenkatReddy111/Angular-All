import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CrudComponent } from './crud/crud.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { PostComponent } from './post/post.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FeatureModule } from './feature/feature.module';


//import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';


const routes: Routes = 

[

  //   {path:'',
  // redirectTo:'/home',
  // pathMatch:'full'
  
  // },
  { 
    path: '', redirectTo: '/', pathMatch: 'full' 
  },

    {
      path:"Register",
      component:TemplateformComponent,
    },
  {
    path:"Reactive",
    component:ReactiveformComponent,
  },
  {
    path:"Reactiveform",
    component:FormreactiveComponent,
  },
  {
    path:"crud",
    component:CrudComponent
  },
  {
    path:"post/:id",
    component:PostComponent
  },
  {
    path:"child",
    component:ChildComponent
  },
  {
    path:"parent",
    component:ParentComponent
  },
  {
    path:"Registration",
    component:RegisterComponent,
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  {
    path:"home",
    loadChildren: './lazy-module/lazy-module.module#LazyModuleModule' 
  }
 
 
  
      ]
      

@NgModule({
  imports: [
 

FeatureModule,
    RouterModule.forRoot(routes)
  ],





exports: [RouterModule],





})
export class AppRoutingModule { }
