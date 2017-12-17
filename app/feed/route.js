import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
import { translationMacro as t } from 'ember-i18n';
export default AbstractModuleRoute.extend({
  moduleName: 'feed',
  sectionTitle: 'Feed Section Title' //t('feed.sectionTitle')
});
