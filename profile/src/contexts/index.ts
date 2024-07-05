import React from 'react';

import { AuthStore } from '../stores/AuthStore';
// import { ProjectStore } from '../stores/ProjectStore';
// import { AlternativeStore } from '../stores/AlternativeStore';
// import { PannellumStore } from '../stores/PannellumStore';
// import { BuildingModelStore } from './../stores/BuildingModelStore';
// import { AssetStore } from '../stores/AssetStore';
import { UserStore } from '../stores/UserStore';
import { IntlStore } from '../stores/IntlStore';
import { ThemeStore } from '../stores/ThemeStore';
import { AppStore } from '../stores/AppStore';
// import { BlenderStore } from '../stores/BlenderStore';
// import { BuilderStore } from '../stores/BuilderStore';

export const storesContext = React.createContext({
    authStore: new AuthStore(),
    appStore: new AppStore(),
    // projectStore: new ProjectStore(),
    // alternativeStore: new AlternativeStore(),
    // pannellumStore: new PannellumStore(),
    // buildingModelStore: new BuildingModelStore(),
    // assetStore: new AssetStore(),
    userStore: new UserStore(),
    intlStore: new IntlStore(),
    themeStore: new ThemeStore()
    // blenderStore: new BlenderStore(),
    // builderStore: new BuilderStore(),
});
