import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';

import ConfigParser from 'logic/authentication/directoryServices/BackendConfigParser';

import BackendCreateLDAP from './directoryServices/ldap/BackendCreate';
import BackendEditLDAP from './directoryServices/ldap/BackendEdit';
import BackendConfigDetailsAD from './directoryServices/activeDirectory/BackendConfigDetails';
import BackendConfigDetailsLDAP from './directoryServices/ldap/BackendConfigDetails';
import BackendCreateAD from './directoryServices/activeDirectory/BackendCreate';
import BackendEditAD from './directoryServices/activeDirectory/BackendEdit';

PluginStore.register(new PluginManifest({}, {
  'authentication.services': [
    {
      name: 'ldap',
      displayName: 'LDAP',
      createComponent: BackendCreateLDAP,
      editComponent: BackendEditLDAP,
      configDetailsComponent: BackendConfigDetailsLDAP,
      configToJson: ConfigParser.toJson,
      configFromJson: ConfigParser.fromJson,
    },
    {
      name: 'active-directory',
      displayName: 'Active Directory',
      createComponent: BackendCreateAD,
      editComponent: BackendEditAD,
      configDetailsComponent: BackendConfigDetailsAD,
      configToJson: ConfigParser.toJson,
      configFromJson: ConfigParser.fromJson,
    },
  ],
}));
