"use client";

import { Button } from "@Permitech/design-system";
import dynamic from "next/dynamic";
import Link from "next/link";
import { redirect } from "next/navigation";

const Editor = dynamic(() => import("@/components/blocknote/BlockNoteEditor"), {
  ssr: false,
});

const BlocknoteEditorPage = () => {
  return (
    <div className="h-screen max-w-5xl mx-auto py-16 space-y-10">
      <div className="border-2 border-gray-300 p-8 rounded-lg flex">
        <h1 className="text-4xl font-bold w-1/3">Templates</h1>
        <div className="w-2/3">
          <Link href="/blocknote/custom">
            <Button
              onClick={() => redirect("/blocknote/custom")}
              color="secondary"
              size="md"
            >
              Basic 101
            </Button>{" "}
          </Link>
        </div>
      </div>

      <div className="border-2 border-gray-300 p-8 rounded-lg">
        <h1 className="text-4xl font-bold">Editor</h1>
        <Editor />
      </div>
    </div>
  );
};

export default BlocknoteEditorPage;
