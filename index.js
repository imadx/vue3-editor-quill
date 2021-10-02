import Editor from './Editor.vue';

const Vue3EditorQuill = {
	install(Vue) {
		Vue.component('vue3-editor-quill', Editor);
	},
};

export { Vue3EditorQuill };
export default Vue3EditorQuill;
