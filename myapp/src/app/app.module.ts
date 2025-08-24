import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileOpsComponent } from './components/file-ops/file-ops.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { Register } from './components/register/register';
import { Users } from './components/users/users';
import { Body } from './components/body/body';
import { Hobbies } from './components/hobbies/hobbies';
import { Menu } from './components/menu/menu';
import { Style2 } from './components/style2/style2';
import { Stylesample } from './components/stylesample/stylesample';
import { Lifecycle } from './components/lifecycle/lifecycle';
import { MypipePipe } from './pipes/mypipe-pipe';
import { Highlight } from './directives/highlight';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversepipePipe } from './pipes/reversepipe-pipe';
import { Favourite } from './components/favourite/favourite';
import { Reactiveforms } from './components/reactiveforms/reactiveforms';
import { Htmlform } from './components/htmlform/htmlform';


@NgModule({
  declarations: [
    AppComponent,
    FileOpsComponent,
    LoginComponent,
    Register,
    Users,
    Body,
    Hobbies,
    Menu,
    Style2,
    Stylesample,
    Lifecycle,
    MypipePipe,
    Highlight,
    HighlightDirective,
    ReversepipePipe,
    Favourite,
    Reactiveforms,
    Htmlform
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }