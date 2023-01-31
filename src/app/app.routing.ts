import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'home'},

    // Auth routes for guests
    // {
    //     path: '',
    //     canActivate: [NoAuthGuard],
    //     canActivateChild: [NoAuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
    //         {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
    //         {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
    //         {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
    //         {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
    //     ]
    // },

    // Auth routes for authenticated users
    // {
    //     path: '',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
    //         {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
    //     ]
    // },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'next', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
            {path: 'wall', loadChildren: () => import('app/modules/pages/wall/wall.module').then(m => m.WallModule)},
            {path: 'category', loadChildren: () => import('app/modules/pages/category/category.module').then(m => m.CategoryModule)},
        ]
    },

    {
        path: 'category',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'computer-science', loadChildren: () => import('app/modules/pages/category/cs/cs.module').then(m => m.CsCategoryModule)},
            {path: 'javascript', loadChildren: () => import('app/modules/pages/category/js/js.module').then(m => m.JsCategoryModule)},
            {path: 'htmlcss', loadChildren: () => import('app/modules/pages/category/htmlcss/htmlcss.module').then(m => m.HtmlCssCategoryModule)},
            {path: 'other', loadChildren: () => import('app/modules/pages/category/htmlcss/htmlcss.module').then(m => m.HtmlCssCategoryModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'about', loadChildren: () => import('app/modules/pages/about/about.module').then(m => m.AboutModule)},
            {path: 'contact', loadChildren: () => import('app/modules/pages/contact/contact.module').then(m => m.ContactModule)},
            {path: 'skills', loadChildren: () => import('app/modules/pages/skills/skills.module').then(m => m.SkillsModule)},
            // {path: 'wall', loadChildren: () => import('app/modules/pages/wall/wall.module').then(m => m.WallModule)},
            {path: 'work', loadChildren: () => import('app/modules/pages/work/work.module').then(m => m.WorkModule)},
        ]
    }
];
