import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ContactComponent
    }
];

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ContactModule
{
}
