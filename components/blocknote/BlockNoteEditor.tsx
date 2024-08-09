"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

export default function Editor() {
  const editor = useCreateBlockNote();

  return (
    <BlockNoteView
      editor={editor}
      className="w-full border-2 border-gray-200 rounded-lg px-5 py-10"
    />
  );
}
