module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
      description: 'This is a component plop',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'What is the name of the component we are making?'
      },
    ], // array of inquirer prompts
      actions: [{
        type: 'add',
        path: 'src/{{name}}.js',
        templateFile: 'plop-templates/Component.hbs'
      },
      {
        type: 'add',
        path: 'src/{{name}}.test.js',
        templateFile: 'plop-templates/Component.test.hbs'
      },
    ]  // array of actions
  });
};