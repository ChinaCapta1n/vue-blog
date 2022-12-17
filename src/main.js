import { createApp } from 'vue';
import App from './App.vue';

// less
import './assets/less/variables.css';
import './assets/less/reset.less';
import './assets/less/normalize.less';
import './assets/less/van-config-provider.css';

// vue-router
import router from './router';

// console text
import './utils/console.js';

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#luffy');
