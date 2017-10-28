const inquirer = require('inquirer')
const chalk = require('chalk')

async function main () {
  const choices = ['red', 'green', 'blue'].map(c => ({ name: c, value: c }))
  const answers = await inquirer.prompt([{
    name: 'color',
    type: 'list',
    message: 'What is your favorite color?',
    choices
  }])

  const {color} = answers
  console.log(chalk`No way, {${color} ${color}} is my favorite color too!`)
}

main()
