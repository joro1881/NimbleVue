import * as components from './components';
import BoxIcon from './icons/BoxIcon.vue';

const componentsList = components?.default;

const NimbleVueComponents = {
    install(Vue) {
        Object.keys(componentsList).forEach(name => {
            Vue.component(name, componentsList[name]);
        })

        Vue.component('box-icon', BoxIcon);
    },
};

export default NimbleVueComponents;