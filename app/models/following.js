import AbstractModel from 'hospitalrun/models/abstract';
import DOBDays from 'hospitalrun/mixins/dob-days';
import EmailValidation from 'hospitalrun/utils/email-validation';
import Ember from 'ember';
import DS from 'ember-data';
import PatientName from 'hospitalrun/mixins/patient-name';

const { computed, get } = Ember;

export default AbstractModel.extend(DOBDays, PatientName, {
  //Going to empty this, but it was based off patients
});
