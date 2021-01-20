import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';

import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [AppComponent,
  HeaderComponent ],
  imports: [BrowserModule, 
  FormsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  BrowserAnimationsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  HttpClientModule,

  MatCardModule
 ],
  providers: [NotesService ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
