<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>LoadingBar</h3>
    <nv-loading-bar/>
    
    <h3>Nv button</h3>
      <div class="px-1">
          <nv-btn
              size="lg"
              hover
              @click="toggleModal"
          > click me </nv-btn>
      </div>

    <h3>Notification box</h3>
      <nv-notice-box 
        :life="loadingTime"
        bubble
        @close="closeNotice"
        closable
        icon="x-circle"
        level="info"
        value="edno suobshtenie"
        position-corner="bottom-left"
      />

    <h3>Rich Text Editor</h3>
      <nv-editor 
        v-model:content="editorContent"
        :placeholder="placeholderText"
        hideOptions
        identifier="nv-1"
        :submitted="submit"
      />
      <h4>Second instance</h4>
       <nv-editor 
        v-model:content="editorContent"
        :placeholder="placeholderText"
        hideOptions
        identifier="nv-2"
        :submitted="submit"
      />

    <h3>Expand Tile</h3>
    <nv-expand-tile noTileTrigger contentClass="flex m-0.5" :iconSize="`1.25rem`">
      <template #header>
          <div>
            <p>Header content</p>
          </div>
      </template>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni velit cupiditate repellendus odio consequuntur laboriosam reprehenderit, officia fugit modi nesciunt ad excepturi. Cumque doloribus repudiandae dolor cupiditate, hic inventore!
        </p>
      </div>
    </nv-expand-tile>

    <h3>Modal Panel</h3>
        <nv-modal-panel v-model:isOpen="toggleShow">
          <div v-if="story && !error">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  <span class="text-red-600">WARNING! </span> 
              </label>
              <span>In order to remove story content, please write the confirmation in the box bellow:</span>
          </div>
          <template #footer>
              <div class="w-2/5">
                  Random footer
              </div>
          </template>
      </nv-modal-panel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
          loadingTime: 1000000,
          modalShow: false,
          editorContent: '',
          placeholderText: 'text goes here',
          submit: false,
          toggleShow: false,
      };
  },
  methods: {
    closeNotice() {
      this.loadingTime = 0;
    },
    toggleModal() {
      this.toggleShow = !this.toggleShow;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
