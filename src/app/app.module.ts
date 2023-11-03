import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { LoginComponent } from './telas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './componentes/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule }from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuService } from './services/menu.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfiguracaoComponent } from './telas/configuracao/configuracao/configuracao.component';
import { MenuConfiguracaoComponent } from './telas/configuracao/menu-configuracao/menu-configuracao.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    ConfiguracaoComponent,
    MenuConfiguracaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    HttpClientModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule ,
    ReactiveFormsModule,
    MatInputModule ,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [
    MenuService,
    HttpClient,
    {provide:HTTP_INTERCEPTORS,    useClass:InterceptorInterceptor,    multi:true    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
