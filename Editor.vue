<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue';
import Quill from 'quill';
import './themes/snow.css';

const container = ref(null);
const instance = getCurrentInstance();
const props = defineProps<{ theme: string; modelValue: unknown }>();
defineEmits<{
	(e: 'update:modelValue', content: unknown): void;
}>();

const handleOnChange = (content: unknown) => {
	if (!instance) {
		throw new Error('failed to getCurrentInstance()');
	}

	instance.emit('update:modelValue', content);
};

onMounted(() => {
	if (!container.value) {
		throw new Error('failed to container');
	}

	const quill = new Quill(container.value, {
		modules: {
			toolbar: {},
		},
		placeholder: 'Get started...',
		theme: 'snow',
	});

	quill.setContents(props.modelValue as any);
	quill.on('text-change', () => {
		handleOnChange(quill.getContents());
	});
});
</script>

<template>
	<div class="vue3-quill-editor-container" ref="container"></div>
</template>

<style scoped></style>
