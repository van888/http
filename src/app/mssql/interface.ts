import { Timestamp } from 'rxjs';
import { Data } from '@angular/router';

export interface Incident {
    DATE_TIME: Date;
    CREATION_DATE: Date;
    MODIFICATION_DATE: Date;
    PROGNOSIS: string;
    STATUS: string;
    INCIDENT_TYPE: string;
    LOCATION_NAME: string;
    INCIDENT_NAME: string;
  }
