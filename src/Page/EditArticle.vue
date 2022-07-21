<script lang="ts">
import { ref, Ref, reactive } from 'vue';
import { CategoryProps } from '../types/home.type';
import type { FormInstance, FormRules } from 'element-plus';
import ArticleApi from '../api/article';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const mdT = require('../docs/test.md');
// import HelloWorld from '../docs/test.md';

export default {
  components: {},
  setup() {
    const formSize = ref('default');
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      title: '',
      introduction: '',
      lable: '',
      articleImg: '',
    });
    const content = ref('');

    const rules = reactive<FormRules>({
      title: [
        {
          required: true,
          message: '文章题目必填',
          trigger: 'blur',
        },
      ],
      lable: [
        {
          required: true,
          message: '至少一个标签',
          trigger: 'blur',
        },
      ],
      articleImg: [
        {
          required: true,
          message: '图片不能为空',
          trigger: 'blur',
        },
      ],
      introduction: [
        {
          required: true,
          message: '文章简介必填',
          trigger: 'blur',
        },
      ],
    });
    const submitForm = async (formEl: FormInstance | undefined) => {
      const list = await ArticleApi.getArticleList();
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!', fields);
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    return {
      formSize,
      resetForm,
      content,
      rules,
      submitForm,
      ruleFormRef,
      ruleForm,
    };
  },
};
</script>

<template>
  <div class="articalWrap">
    <div class="topBg">
      <div class="topTitle">文章编写</div>
    </div>
    <div class="previewContainer">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="文章题目" prop="title">
          <el-input v-model="ruleForm.title" placeholder="文章题目" />
        </el-form-item>
        <el-form-item label="文章标签" prop="lable">
          <el-input
            v-model="ruleForm.lable"
            placeholder="文章标签，多个标签用逗号隔开"
          />
        </el-form-item>

        <el-form-item label="文章图链接" prop="lable">
          <el-input
            v-model="ruleForm.lable"
            placeholder="图片比例1000*1000，上传cdn获取地址"
          />
        </el-form-item>

        <el-form-item label="文章简介" prop="introduction">
          <el-input
            v-model="ruleForm.introduction"
            placeholder="文章简介，200字以内"
            type="textarea"
          />
        </el-form-item>
        <div class="editContentArea">
          <div class="title">文章内容编写</div>
          <v-md-editor v-model="content" height="400px"></v-md-editor>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Create</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>

      <!-- <v-md-preview :text="testPreText"></v-md-preview> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.articalWrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .topBg {
    width: 100%;
    height: 120px;
    background-color: #211e55;
    margin-bottom: 20px;
    object-fit: cover;
    position: relative;
    display: flex;

    .topTitle {
      position: absolute;
      font-weight: bold;
      top: 60px;
      left: 80px;
      font-size: 30px;
      opacity: 1;
      color: #fff;
      z-index: 2;
    }
  }

  .editContentArea {
    width: 100%;
    padding: 0 40px;
    .title {
      text-align: left;
      padding-left: 10px;
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 32px;
    }
    margin-bottom: 20px;
  }
}
</style>
