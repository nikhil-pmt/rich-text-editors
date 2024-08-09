"use client";

import { useState } from "react";
import NovelEditor from "@/components/novel/NovelEditor";
import { JSONContent } from "@tiptap/react";

export default function NovelEditorPage() {
  const [content, setContent] = useState<JSONContent[] | undefined>([
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "A line of text in a paragraph.",
        },
      ],
    },
  ]);

  return (
    <div className="h-screen flex max-w-5xl mx-auto py-16">
      <NovelEditor
        content={content}
        setContent={setContent}
        title="Product Content"
      />
    </div>
  );
}
