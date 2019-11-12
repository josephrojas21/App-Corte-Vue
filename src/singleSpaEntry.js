import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false;
import store from './store'
import router from './router'
//import './style.scss';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app',
        render: h => h(App),
        router,
        vuetify
}
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app');
    
    if (!el) {
        el = document.createElement('div');
        el.id = 'app';
        document.body.appendChild(el);
    }
    return el;
}
