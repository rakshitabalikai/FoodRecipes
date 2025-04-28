import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

export const routes: Routes = [
    {
        path:"abouts",
        component:AboutComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"menu",
        component:RecipiesComponent
    },
    {
        path: "instructions/:id",
        component: InstructionsComponent
    },
    {
        path:"blog",
        component:BlogComponent
    },
    {
        path:"contactus",
        component:ContactusComponent
    },
    {
        path:"blog-details",
        component:BlogDetailsComponent
    }
];
