import AbstractIndexRoute from 'hospitalrun/routes/abstract-index-route';
import { translationMacro as t } from 'ember-i18n';

export default AbstractIndexRoute.extend(UserSession, {
  modelName: 'feed',
  pageTitle: 'Feed Page Title' //t('feed.feedTitle'),
//  searchStatus: 'Feed search status',

  // newButtonAction: computed(function() {
  //   if (this.currentUserCan('add_patient')) {
  //     return 'newItem';
  //   } else {
  //     return null;
  //   }
  // }),
  // newButtonText: t('patients.buttons.newPatient'),
  // pageTitle: t('patients.titles.patientListing'),

  // _getStartKeyFromItem(item) {
  //   let displayPatientId = item.get('displayPatientId');
  //   let id = this._getPouchIdFromItem(item);
  //   return [displayPatientId, id];
  // },

  // _modelQueryParams() {
  //   return {
  //     mapReduce: 'patient_by_display_id'
  //   };
  // }

});
