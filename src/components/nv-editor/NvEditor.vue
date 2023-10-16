<template>
  <div>
    <NvEditorToolbar
      v-show="!hideOptions || editorOptions"
      @hide="removeToggle"
      :identifier="`${identifier}_toolbar`"
    />      

    <div
      :id="`${identifier}_editor`"
      :style="{ height: height }"
      @focusin="setToggle"
    />
  </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import NvEditorToolbar from './NvEditorToolbar.vue';

export default {
  props: {
    placeholder: String,
    hideOptions: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '200px',
    },
    identifier: {
      type: String,
      default: 'nv'
    },
    content: {
      type: String,
      default: '',
    },
    submitted: Boolean,
  },
  emits: ['update:content'],
  components: {
    NvEditorToolbar,
  },
  data() {
    return {
      editor: null,
      editorOptions: false,
    };
  },
  watch: {
    submitted(newSubmittedValue) {
      if (newSubmittedValue) {
        this.removeToggle();
      }
    },
  },
  mounted() {
    if (!this.identifier) {
      return;
    }

    try {
      this.initiateQuillEditor();
    } catch (error) {
      console.log('error: ', error);
    }
  },
  methods: {
    initiateQuillEditor() {
      this.editor = new Quill(`#${this.identifier}_editor`, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: `#${this.identifier}_toolbar`,
          },
        },
        placeholder: this.placeholder,
      });

      this.editor.root.innerHTML = this.content;
      this.editor.on('editor-change', () => {
        this.$emit('update:content', this.editor.root.innerHTML);
      });
    },
    setToggle() {
      this.editorOptions = true;
    },
    removeToggle() {
      this.editorOptions = false;
    },
  },
};
</script>
<style>
.ql-editor {
  padding: 8px;
}

#preview {
  padding: 15px;
}

#preview h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

</style>