<template>
    <div :id="identifier">
		<span class="ql-formats">
            <select class="ql-header">
            </select>
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
            <select class="ql-color"></select>
            <select class="ql-background"></select>
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
            <button class="ql-list" value="ordered"></button>
            <button class="ql-list" value="bullet"></button>
            <button class="ql-indent" value="-1"></button>
            <button class="ql-indent" value="+1"></button>
            <button class="ql-direction" value="rtl"></button>
            <select class="ql-align"></select>
            <button class="ql-image"></button>
            <span id="hiding" class="px-2" @click="hide()"><box-icon size="1rem" name='hide' /></span>
		</span>
    </div>
</template>
<script>
	export default {
		props: ['identifier'],
        methods: {
            hide() {
                this.$emit('hide');
            }
        }
	}
</script>