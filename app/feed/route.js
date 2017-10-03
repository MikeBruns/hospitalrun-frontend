import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
import { translationMacro as t } from 'ember-i18n';
export default AbstractModuleRoute.extend({
  addCapability: 'add_follower',
  moduleName: 'feed',
  sectionTitle: t('feed.sectionTitle')
});
