import { FlatCompat } from "@eslint/eslintrc"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: (await import("eslint-plugin-import")).default,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [2, { prefer: "type-imports" }],
      "import/order": [2, { alphabetize: { order: "asc" } }],
    },
  },
]

export default eslintConfig
