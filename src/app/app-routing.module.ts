import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';
import { FeaturedWidgetComponent } from './widgets/featured-widget/featured-widget.component';

const routes: Routes = [
  {path: '',      redirectTo: '/items', pathMatch: 'full' },
  {path: 'items', component: ItemsComponent, children: [
    {path: ''},
    {path: 'featured/:id', component: FeaturedItemComponent}
  ]},
  {path: 'widgets', component: WidgetsComponent, children: [
    {path: ''},
    {path: 'featured/:id', component: FeaturedWidgetComponent}
  ]},
  {path: '*',     component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
