import { createApp } from 'vue';
import App from './App.vue';

// pinia
import pinia from './stores/index.js';

// less
import './assets/less/variables.css';
import './assets/less/reset.less';
import './assets/less/normalize.less';
import './assets/less/van-config-provider.css';

// vue-router
import router from './router';

// console text
import './utils/console.js';

// vant
import { Icon } from 'vant';

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard);


createApp(App).use(pinia).use(Icon).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#luffy');
