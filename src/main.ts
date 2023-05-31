import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppHistoryModule } from './app-history/app-history.module';


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule)
.catch((err) => console.error(err));

// platform.bootstrapModule(AppHistoryModule)
// .catch((err) => console.error(err));