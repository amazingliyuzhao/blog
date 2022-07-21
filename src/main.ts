import { createApp } from 'vue';

import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';

// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';

import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import hljs from 'highlight.js';
import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  // Hljs: hljs,
});

VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());

// console.log(VMdPreview);

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(VueMarkdownEditor);

app.mount('#app');
