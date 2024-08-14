"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const BlocknoteCustomEditorPage = () => {
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/blocknote/BlockNoteCustomEditor"), {
        ssr: false,
      }),
    []
  );

  return (
    <div className="h-screen flex max-w-5xl mx-auto py-16">
      <Editor
        initialContent={[
          {
            type: "heading",
            content: "Template 101",
          },
          {
            type: "paragraph",
            content: "",
          },
          {
            type: "paragraph",
            content: "This is sample template with predefined elements!",
          },
          {
            type: "paragraph",
            content: "",
          },
          {
            type: "checkListItem",
            content: "Checklist item 1",
          },
          {
            type: "checkListItem",
            content: "Checklist item 2",
          },
          {
            type: "paragraph",
            content: "",
          },
          {
            type: "heading",
            props: {
              level: 2,
            },
            content: "Add media, as you want",
          },
          {
            type: "heading",
            props: {
              level: 3,
            },
            content: [
              {
                type: "text",
                text: "Resizable, ",
                styles:{}
              },
              {
                type: "text",
                text: "Replaceable ",
                styles: {
                  textColor: "red",
                },
              },
              {
                type: "text",
                text: "and rearrangeable.",
                styles: {},
              },
            ],
          },
          {
            type: "image",
            props: {
              url: "https://media.licdn.com/dms/image/D4E0BAQF9sAjpg8QdAA/company-logo_200_200/0/1698775727608/permittech_logo?e=2147483647&v=beta&t=HJKd7blKz5jwvmrwRaa4iNbctUmQAb7xjsXoBzHEyc0",
              caption: "Permitech Logo",
            },
          },
          {
            type: "heading",
            props: {
              level: 2,
            },
            content: "What else?",
          },
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "The text ",
                styles: {
                  bold: true,
                },
              },
              {
                type: "text",
                text: "can be ",
                styles: {
                  underline: true,
                },
              },
              {
                type: "text",
                text: "styled ",
                styles: {
                  italic: true,
                  textColor: "yellow",
                },
              },
              {
                type: "text",
                text: "as well.",
                styles: {
                  italic: true,
                  backgroundColor: "pink",
                },
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Also you can add links, here is the ", styles: {} },
              {
                type: "link",
                content: [
                  {
                    type: "text",
                    text: "link",
                    styles: {
                      textColor: "blue",
                      underline: true,
                    },
                  },
                ],
                href: "https://permi.tech",
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BlocknoteCustomEditorPage;
