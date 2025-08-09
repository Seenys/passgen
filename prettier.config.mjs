/** @type {import('prettier').Config} */
export default {
  // Longitud máxima de línea antes de ajustar
  printWidth: 100,

  // Usar comillas simples en lugar de comillas dobles
  singleQuote: true,

  // Agregar punto y coma al final de las declaraciones
  semi: true,

  // Usar espacios en lugar de tabulaciones
  useTabs: false,

  // Número de espacios por nivel de indentación
  tabWidth: 2,

  // Agregar comas finales donde sea válido en ES5
  trailingComma: 'es5',

  // Espacios alrededor de llaves en objetos, arreglos, etc.
  bracketSpacing: true,

  // Colocar el > de cierre de JSX en una nueva línea
  bracketSameLine: false,

  // Incluir paréntesis alrededor de un solo parámetro de arrow function
  arrowParens: 'always',

  // Configuración para ordenar las importaciones
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],

  // No agregar prefijo a las importaciones
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // Plugins
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  // Configuración específica para Tailwind CSS
  tailwindConfig: './tailwind.config.js',

  // Ignorar archivos específicos
  ignorePatterns: ['node_modules', '.next', 'app/generated'],
};
