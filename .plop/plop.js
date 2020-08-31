module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
