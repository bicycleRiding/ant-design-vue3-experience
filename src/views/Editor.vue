<template>
  <main>
    <div id="editor"></div>
    <section class="c-save">
      <a-button type="primary" @click="sumbit">发布</a-button>
      <a-button type="danger" @click="clean">清空</a-button>
      <a-popover title="草稿箱">
        <template #content>
          <p><a-button block @click="draftsShow('日志')">日志</a-button></p>
          <p><a-button block @click="draftsShow('读书')">读书</a-button></p>
        </template>
        <a-button> 草稿箱 </a-button>
      </a-popover>
    </section>
    <a-modal :visible="modalStatus" title="发布文章" @cancel="handleCancel">
      <template #footer>
        <a-button key="back" @click="handleCancel"> 取消 </a-button>
        <a-button type="danger" @click="handleReset">重置</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="confirmLoading"
          @click="handleOk"
        >
          确定
        </a-button>
      </template>
      <a-form layout="vertical" :model="modelRef">
        <a-form-item label="标题" v-bind="validateInfos.title">
          <a-input
            placeholder="请输入文章标题"
            v-model:value="modelRef.title"
          ></a-input>
        </a-form-item>
        <a-form-item label="简介" v-bind="validateInfos.synopsis">
          <a-input
            placeholder="请输入文章简介"
            v-model:value="modelRef.synopsis"
          ></a-input>
        </a-form-item>
        <a-form-item label="文章类型">
          <a-radio-group v-model:value="modelRef.type">
            <a-radio value="blog"> 日志 </a-radio>
            <a-radio value="book"> 读书 </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>

    <a-drawer
      :visible="draftsStatus"
      @close="draftsHidden"
      :title="draftsTitle"
    >
      测试
    </a-drawer>
  </main>
</template>

<script>
import { useEditor } from "@/use/useEditor";
import { usePublishNotification } from "@/use/useNotification";
import { reactive, ref, watchEffect } from "vue";
import { useForm } from "@ant-design-vue/use";

export default {
  setup() {
    const editor = useEditor();
    const clean = () => editor.txt.clear();

    const setStatus = (status, bol) => (status.value = bol);

    const draftsTitle = ref("日志");

    const modalStatus = ref(false);
    const draftsStatus = ref(false);
    const confirmLoading = ref(false);

    const modelRef = reactive({
      title: "",
      synopsis: "",
      type: "blog",
    });
    const rulesRef = reactive({
      title: [
        {
          required: true,
          message: "标题是必填项",
        },
      ],
      synopsis: [
        {
          required: true,
          message: "简介是必填项",
        },
      ],
    });

    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );

    const SuccessPublishNotification = usePublishNotification(
      "success",
      "成功"
    );
    // const FailPublishNotification = usePublishNotification("error", "失败");
    const CancelPublishNotification = usePublishNotification(
      "info",
      "取消发布"
    );
    const sumbit = () => setStatus(modalStatus, true);

    // TODO 待加入请求
    const handleOk = () => {
      // setStatus(confirmLoading, true);
      validate()
        .then(() => {
          setStatus(modalStatus, false);
          SuccessPublishNotification();
          setStatus(confirmLoading, false);
        })
        .catch((err) => console.log(err));
    };
    const handleCancel = () => {
      setStatus(modalStatus, false);
      CancelPublishNotification();
    };

    const handleReset = resetFields;

    const draftsShow = (type) => {
      draftsTitle.value = type;
      setStatus(draftsStatus, true);
    };
    const draftsHidden = () => setStatus(draftsStatus, false);

    // TODO 代写草稿箱watchEffect
    watchEffect(() => console.log(draftsTitle.value));
    return {
      modalStatus,
      confirmLoading,
      sumbit,
      handleOk,
      handleCancel,
      handleReset,
      clean,
      modelRef,
      validateInfos,
      draftsShow,
      draftsStatus,
      draftsHidden,
      draftsTitle,
    };
  },
};
</script>

<style scoped>
.c-save {
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-save >>> .ant-btn {
  margin: 5px;
}
</style>