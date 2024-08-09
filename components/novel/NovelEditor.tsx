import { type Editor as TipTapEditor, JSONContent } from "@tiptap/core";
import { Editor } from "novel";

type NovelEditorProps = {
  setContent: any;
  title: string;
  content: JSONContent[] | undefined;
};

export default function NovelEditor({
  setContent,
  content,
  title,
}: NovelEditorProps) {
  return (
    <div className="w-full h-full min-h-screen">
      <Editor
        defaultValue={{
          type: "doc",
          content: content,
        }}
        onDebouncedUpdate={(editor?: TipTapEditor) => {
          setContent(editor?.getHTML());
        }}
        disableLocalStorage={true}
        className="rounded-md border shadow-none"
      />
    </div>
  );
}
