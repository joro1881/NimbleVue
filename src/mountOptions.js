import store from "./store.js";
import BoxIcon from "./icons/index.js";

const nvBtn = {
  template: `
    <button>
    </button>
  `,
};

const ModalPanel = {
  template: `
    <div>
    </div>
  `,
};

export default {
  global: {
    plugins: [store],
    // mocks: {
    //   $notice:() => {},
    // },
    components: {
      BoxIcon,
      // 'nv-btn': nvBtn,
      // 'modal-panel': ModalPanel,
    },
  },
};
