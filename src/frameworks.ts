import { blue, cyan, green } from "kolorist";

export const FRAMEWORKS: Framework[] = [
  {
    name: "vue",
    display: "Vue",
    color: green,
    variants: [
      {
        name: "vue-ts",
        display: "TypeScript",
        color: blue,
      },
    ],
  },
  {
    name: "react",
    display: "React",
    color: cyan,
    variants: [
      {
        name: "react-ts",
        display: "TypeScript",
        color: blue,
      },
    ],
  },
  // {
  //   name: "others",
  //   display: "Others",
  //   color: reset,
  //   variants: [
  //     {
  //       name: "malagu-init",
  //       display: "malagu-init ↗",
  //       color: reset,
  //       customCommand: "npm exec @malagu/cli init TARGET_DIR",
  //     },
  //   ],
  // },
];

export const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

export type ColorFunc = (str: string | number) => string;
export type Framework = {
  name: string;
  display: string;
  color: ColorFunc;
  variants: FrameworkVariant[];
};
export type FrameworkVariant = {
  name: string;
  display: string;
  color: ColorFunc;
  customCommand?: string;
};
