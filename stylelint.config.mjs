/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-clean-order',
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    'color-function-notation': 'modern',
  },
}
