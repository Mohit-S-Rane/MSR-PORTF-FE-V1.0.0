import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Route, RouterModule } from '@angular/router';
import { MsrAlertModule } from '@msr/components/alert';
import { MsrCardModule } from '@msr/components/card';
import { CsCategoryComponent } from './cs.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: CsCategoryComponent
    }
];

@NgModule({
    declarations: [
        CsCategoryComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MsrCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MsrCardModule,
        MsrAlertModule,
    ]
})
export class CsCategoryModule
{
}
