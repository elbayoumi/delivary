import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OrderHistoryModule } from './components/order-history/order-history.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    ComponentsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
