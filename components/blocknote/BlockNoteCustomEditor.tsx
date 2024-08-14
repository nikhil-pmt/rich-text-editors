"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

interface EditorProps {
  onChange?: (value: string) => void;
  initialContent?: PartialBlock[] | undefined;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent,
  });

  return (
    <div className="w-full">
      <BlockNoteView editor={editor} className="p-2 border" />
    </div>
  );
};

export default Editor;
