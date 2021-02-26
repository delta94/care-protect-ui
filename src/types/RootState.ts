// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
import { PatientsList } from 'app/containers/PatientList/types';
import { InfectionControl } from 'app/containers/InfectionControl/types';

import { AssessmentEvent } from 'app/containers/Assessment/types';
import { PatientOverview } from 'app/containers/PatientOverview/types';
import { ThemeState } from 'styles/theme/slice/types';

export interface RootState {
  theme?: ThemeState;
  session?: any;
  assessmentyType?: any;
  patientsList?: PatientsList;
  assessmentEvent?: AssessmentEvent;
  infectionControl?: InfectionControl;
  patientOverview?: PatientOverview;
}
