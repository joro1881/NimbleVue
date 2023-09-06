/*
    Component / function - shows content under one bar, it has three sections - header, content and bar. 
    All three will be customizable via slots or props.
*/
<template>
    <div class="w-full items-center rounded-md deep-shadow component border border-solid">
        <div id="tile-header" 
            :class="headerClass ? headerClass : ` flex items-center ${!noTileTrigger ? 'cursor-pointer' : ''}`"            
        >
            <span v-if="!noIcon" @click="onIconClick" id="icon" class="mr-2 ml-0.5 cursor-pointer flex items-center">
                <box-icon v-if="!body" :name="expandIcon" :size="iconSize" :color="iconColor" />
                <box-icon v-else :name="collapseIcon" :size="iconSize" :color="iconColor" />                
            </span>
            <div :class="headerStyle" @click="onTileClick">
                <slot name="header">
                    {{ title }}
                </slot>
            </div>
        </div>

        <Transition name="fade" mode="out-in">
            <div v-show="body">
                <div id="tile-content"
                    :class="contentClass ? contentClass : `flex m-1`"
                >
                    <div :class="contentStyle">
                        <slot>
                            {{ content }}
                        </slot>
                    </div>
                </div>

                <div id="tile-footer" v-if="footer" :class="`${footerStyle} flex m-1`">
                    <slot name="footer">
                        {{ footer }}
                    </slot>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
import BoxIcon from '@/icons/BoxIcon.vue';

export default {
    name: 'NvExpandTile',
    emits: ['tile-close', 'tile-open'],
    components: {
        BoxIcon,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        noTileTrigger: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        },
        footer: {
            default: false,
        },        
        headerClass: {
            type: String,
            default: ''
        },
        headerStyle: {
            type: String,
            default: 'w-full'
        },
        contentClass: {
            type: String,
            default: ''
        },
        contentStyle: {
            type: String,
            default: 'w-full'
        },
        footerStyle: {
            type: String,
            default: 'w-full'
        },
        collapseIcon: {
            type: String,
            default: 'chevron-down'
        },
        expandIcon: {
            type: String,
            default: 'chevron-right'
        },
        iconSize: { default: '' },
        iconColor: { default: '' },
        noIcon: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            body: false,
        }
    },
    methods: {
        onTileClick() {
            if (this.noTileTrigger) {
                return;
            }
            this.body = !this.body;
            this.emit();
        },
        onIconClick() {
            this.body = !this.body;
            this.emit();
        },
        emit() {
            if(this.body) {
                this.$emit('tile-open');
                return;
            }

            this.$emit('tile-close');
        }
    }

}
</script>

<style scoped>
.component {
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
}
.icon {
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    font-family: primeicons;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-transform: none;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}s

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

</style>