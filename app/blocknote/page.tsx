"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/blocknote/BlockNoteEditor"), {
  ssr: false,
});

const BlocknoteEditorPage = () => {
  return (
    <div className="h-screen flex max-w-5xl mx-auto py-16">
      <Editor />
    </div>
  );
};

export default BlocknoteEditorPage;
