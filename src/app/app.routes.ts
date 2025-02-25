import { Routes } from '@angular/router';
import { DisplayAllComponent } from './components/product/display-all/display-all.component';
import { AddComponent } from './components/product/add/add.component';
import { UpdateComponent } from './components/product/update/update.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { RegistrationComponent } from './components/product/registration/registration.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
    {path:'', redirectTo:'/product/all', pathMatch:'full'},
    {path: 'demo', component: DemoComponent},
    {path: 'product-search', component: SearchProductComponent},
    {path: 'product/all', component:DisplayAllComponent},
    {path: 'product/add', component: AddComponent},
    {path:'product/update/:id', component: UpdateComponent},
    {path: 'product/delete', component: DeleteComponent},
    {path: 'product/registration', component: RegistrationComponent},
    {path: 'parent', component: ParentComponent},
    {path: "**", component: PageNotFoundComponent}
];
