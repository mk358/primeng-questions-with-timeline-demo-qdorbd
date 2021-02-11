import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';

import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {TimelineModule} from 'primeng/timeline';
import { CardModule } from "primeng/card";
import {PaginatorModule} from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VirtualScrollerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TimelineModule,
    CardModule,
    ListboxModule,
    ScrollPanelModule,
    PaginatorModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
