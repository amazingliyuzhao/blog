/* eslint-disable prettier/prettier */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'standard', // 格式化规范
		'plugin:prettier/recommended', // 新增，必须放在最后面,prettier规则覆盖与eslint冲突的规则
		'prettier', // 避免vue 与 prettier冲突
		'eslint:recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		"vue/multi-word-component-names": 0,
		"no-unused-vars": 0,
		"@typescript-eslint/no-unused-vars": 0
	},
};