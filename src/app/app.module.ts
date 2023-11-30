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
import { MenuService } from './services/api/menu/menu.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfiguracaoComponent } from './telas/configuracao/configuracao/configuracao.component';
import { MenuConfiguracaoComponent } from './telas/configuracao/menu-configuracao/menu-configuracao.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { CriarEditarMenuComponent } from './componentes/criar-editar-menu/criar-editar-menu.component';
import {DialogModule} from '@angular/cdk/dialog';
import { IconDialogComponent } from './componentes/dialog/icon-dialog/icon-dialog.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BalaoAvisoService } from './services/notificacao/balao-aviso.service';
import { NotificacaoComponent } from './componentes/notificacao/notificacao.component';
import { DialogConfirmacaoComponent } from './componentes/dialog/dialog-confirmacao/dialog-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SubMenuComponent } from './telas/configuracao/sub-menu/sub-menu.component';
import { CriarEditarSubmenuComponent } from './componentes/criar-editar-submenu/criar-editar-submenu.component';
import { DialogDragAndDropComponent } from './componentes/dialog/dialog-drag-and-drop/dialog-drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { KanbanComponent } from './telas/kanban/kanban.component';
import {MatCardModule} from '@angular/material/card';
import { CardKanbanComponent } from './componentes/card-kanban/card-kanban.component';
import { SubTarefaComponent } from './componentes/sub-tarefa/sub-tarefa.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    ConfiguracaoComponent,
    MenuConfiguracaoComponent,
    CriarEditarMenuComponent,
    IconDialogComponent,
    NotificacaoComponent,
    DialogConfirmacaoComponent,
    SubMenuComponent,
    CriarEditarSubmenuComponent,
    DialogDragAndDropComponent,
    KanbanComponent,
    CardKanbanComponent,
    SubTarefaComponent,
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
    MatTableModule,
    DialogModule,
    ScrollingModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule,
    MatCardModule,
    FormsModule,
    MatProgressBarModule,
  ],
  providers: [
    MenuService,
    HttpClient,
    {provide:HTTP_INTERCEPTORS,    useClass:InterceptorInterceptor,    multi:true    },
    BalaoAvisoService
],
  bootstrap: [AppComponent],
})
export class AppModule { }
