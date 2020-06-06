const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () { // 
        return this.prompt([
            {
                type: 'input', // type非必填, 默认是text, 即让用户输入文本
                name: 'name', // name 用户输入项的标识,在获取用户输入值的时候会用到
                message: 'Your project name', // message是给用户的提示信息
                default: this.appname // 用户输入默认值,非必填
            }
        ])
        .then(answers => { // 拿到用户输入的数据
            this.answers = answers
        })
    }

    writing () {
        // 把每一个文件都通过模板转换到目标路径

        const templates = [
            '.browserslistrc',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'README.md',
            'yarn.lock',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/store/index.js',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/router/index.js',
            'src/components/HelloWorld.vue',
            'src/assets/logo.png',
            'tests/unit/example.spec.js'
        ]
        templates.forEach(item => {
            // item // 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}