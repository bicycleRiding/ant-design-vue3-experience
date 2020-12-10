<template>
  <main>
    <div id="editor"></div>
    <section class="c-button-area">
      <a-button type="primary" @click="release">发布</a-button>
      <a-button type="danger" @click="clean">清空</a-button>
      <a-popover title="选择">
        <template #content>
          <p>
            <a-button @click="switchDraftType('blog')" block>日志</a-button>
          </p>
          <p>
            <a-button @click="switchDraftType('book')" block>读书</a-button>
          </p>
        </template>
        <a-button type="dashed">类型-{{ currentType }}</a-button>
      </a-popover>
    </section>
  </main>
</template>

<script>
import useEditor from "u@/editor.js";
import { debounce } from "u@/common/fn.js";
import useNotice from "u@/common/notice.js";
import {
  useIndexedDB,
  showMember,
  createMember,
  updateMember,
} from "u@/indexedDB";
import { onMounted, ref, watch, computed } from "vue";
import xss from "xss";
export default {
  setup() {
    /** 富文本域 */
    const editor = useEditor();
    const protectHtml = (html) => xss(html);
    const getSafeHtml = () => {
      const html = editor.txt.html();
      const safeHtml = protectHtml(html);
      return safeHtml;
    };
    const setEditorTxt = (html) => {
      console.log(html);
      editor.txt.html(html);
    };
    const cleanEditorTxt = () => setEditorTxt("");
    editor.config.onchange = debounce(() => {
      const safeHtml = getSafeHtml();
      updateMember(IDB, draftType.value, {
        name: "common",
        content: safeHtml,
      })
        .then(noticeSaveDraftSuccess)
        .catch(noticeSaveDraftFail);
    }, 3000);

    /** 草稿域 */
    const noticeDraft = (desc) => {
      return {
        success: useNotice("success", "草稿", desc),
        error: useNotice("error", "草稿", desc),
      };
    };
    const noticeSaveDraftSuccess = noticeDraft("已保存在本地").success;
    const noticeSaveDraftFail = noticeDraft("保存草稿失败").error;
    const noticeSwitchDraftSuccess = noticeDraft("切换成功").success;
    const noticeSwitchDraftFail = noticeDraft("切换失败").error;

    let IDB = null;
    const draftType = ref("blog");
    onMounted(async () => {
      const newObjectStoremap = new Map([
        ["blog", "name"],
        ["book", "name"],
      ]);
      IDB = await useIndexedDB("draft", newObjectStoremap);
      const blogDraft = await showMember(IDB, "blog", "common");
      const bookDraft = await showMember(IDB, "book", "common");
      if (!blogDraft) {
        await createMember(IDB, "blog", {
          name: "common",
          content: "",
        });
      } else {
        const isBlogDraftType = draftType.value === "blog";
        if (isBlogDraftType) {
          const blogDraftContent = blogDraft.content;
          setEditorTxt(blogDraftContent);
        }
      }
      if (!bookDraft) {
        await createMember(IDB, "book", {
          name: "common",
          content: "",
        });
      } else {
        const isBookDraftType = draftType.value === "book";
        if (isBookDraftType) {
          const bookDraftContent = bookDraft.content;
          setEditorTxt(bookDraftContent);
        }
      }
    });

    watch(draftType, (value) => {
      showMember(IDB, value, "common")
        .then((draft) => {
          const draftContent = draft.content;
          setEditorTxt(draftContent);
          noticeSwitchDraftSuccess();
        })
        .catch(noticeSwitchDraftFail);
    });

    /** 功能域 */
    const release = () => console.log(getSafeHtml());
    const clean = () => cleanEditorTxt();
    const switchDraftType = (type) => (draftType.value = type);
    const currentType = computed(() => {
      const typeMap = new Map([
        ["blog", "日志"],
        ["book", "读书"],
      ]);
      return typeMap.get(draftType.value);
    });

    return {
      release,
      clean,
      switchDraftType,
      currentType,
    };
  },
};
</script>

<style scoped>
.c-button-area {
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-button-area >>> .ant-btn {
  margin: 5px;
}
</style>