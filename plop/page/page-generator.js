module.exports = function (plop, handlers) {
    plop.setGenerator('page', {
        description: 'Página',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'Nome da Página: ',
            },
            {
                name: 'folder',
                type: 'input',
                message: 'Nome da Pasta: ',
            },
        ],
        actions(data) {
            const actions = [
                {
                    type: 'add',
                    path: `src/pages/${data.folder.toLowerCase()}/${handlers.createFilename(
                        data.name
                    )}.tsx`,
                    templateFile: 'plop/page/page-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/styles/pages/${data.folder.toLowerCase()}/${handlers.createFilename(
                        data.name
                    )}.styled.tsx`,
                    templateFile: 'plop/page/page-style-template.hbs',
                },
            ];

            return actions;
        },
    });
};
