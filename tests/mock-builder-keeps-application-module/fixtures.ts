import { APP_INITIALIZER, Component, InjectionToken, NgModule } from '@angular/core';

@Component({
  selector: 'target-component',
  ['standalone' as never /* TODO: remove after upgrade to a14 */]: false,
  template: 'target',
})
export class TargetComponent {}

export const TARGET_TOKEN = new InjectionToken('TARGET_TOKEN');

@NgModule({
  declarations: [TargetComponent],
  exports: [TargetComponent],
  providers: [
    {
      provide: TARGET_TOKEN,
      useValue: 'TARGET_TOKEN',
    },
    {
      multi: true,
      provide: APP_INITIALIZER,
      useValue: () => undefined,
    },
  ],
})
export class TargetModule {}
