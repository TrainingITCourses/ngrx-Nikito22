import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LsBuscadorComponent } from './ls-buscador/ls-buscador.component';
import { LsBuscadorCriteriosComponent } from './ls-buscador/buscadorCriterios/buscadorCriterios.component';
import { LsBuscadorLanzamientosComponent } from './ls-buscador/buscadorLanzamientos/buscadorLanzamientos.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        LsBuscadorComponent,
        LsBuscadorCriteriosComponent,
        LsBuscadorLanzamientosComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production
            ? StoreDevtoolsModule.instrument()
            : []
    ],
    exports: [],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
