/*
    Component / function - shows content under one bar, it has three sections - header, content and bar. 
    All three will be customizable via slots or props.
*/
import { shallowMount } from '@vue/test-utils';
import NvExpandTile from './NvExpandTile.vue';

describe('Renders component with 3 sections', () => {
    it('Renders content with default props', () => {
        const wrapper = shallowMount(NvExpandTile, {
            props: {
                title: 'Testing title',
                content: 'body testing',
                footer: 'this is footer'
            }
        });

        expect(wrapper.find('#tile-header').exists()).toBe(true);
        expect(wrapper.find('#tile-content').exists()).toBe(true);
        expect(wrapper.find('#tile-footer').exists()).toBe(true);   
        expect(wrapper.find('#icon').exists()).toBe(true);     
    });
    it('Renders content with no icon, no footer', () => {
        const wrapper = shallowMount(NvExpandTile, {
            props: {
                title: 'Testing title',
                content: 'body testing',
                noIcon: true,
            }
        });

        expect(wrapper.find('#tile-header').exists()).toBe(true);
        expect(wrapper.find('#tile-content').exists()).toBe(true);
        expect(wrapper.find('#tile-footer').exists()).toBe(false);
        expect(wrapper.find('#icon').exists()).toBe(false);

        wrapper.find('#tile-header').trigger('click');
        wrapper.vm.$emit('tile-open');
        wrapper.find('#tile-header').trigger('click');
        wrapper.vm.$emit('tile-close');
    });

    it('Renders content with no title trigger', () => {
        const wrapper = shallowMount(NvExpandTile, {
            props: {
                title: 'Testing title',
                content: 'body testing',
                noTileTrigger: true,
            }
        });

        expect(wrapper.find('#tile-header').exists()).toBe(true);
        expect(wrapper.find('#tile-content').exists()).toBe(true);
        expect(wrapper.find('#tile-footer').exists()).toBe(false);
        expect(wrapper.find('#icon').exists()).toBe(true);

        wrapper.find('#icon').trigger('click');
        wrapper.vm.$emit('tile-open');
        wrapper.find('#icon').trigger('click');
        wrapper.vm.$emit('tile-close');
    });
});