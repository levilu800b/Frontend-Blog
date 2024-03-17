import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight/lib/common';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';
import c from 'highlight.js/lib/languages/c';
import cpp from 'highlight.js/lib/languages/cpp';
import csharp from 'highlight.js/lib/languages/csharp';
import kotlin from 'highlight.js/lib/languages/kotlin';
import swift from 'highlight.js/lib/languages/swift';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('json', json);
lowlight.registerLanguage('bash', bash);
lowlight.registerLanguage('python', python);
lowlight.registerLanguage('java', java);
lowlight.registerLanguage('php', php);
lowlight.registerLanguage('sql', sql);
lowlight.registerLanguage('c', c);
lowlight.registerLanguage('cpp', cpp);
lowlight.registerLanguage('csharp', csharp);
lowlight.registerLanguage('kotlin', kotlin);
lowlight.registerLanguage('swift', swift);

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
  Dropcursor,
  Image,
];
