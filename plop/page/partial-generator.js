module.exports = function (plop, handlers) {
    plop.setGenerator('partial', {
        description: 'Partial',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'Nome da Partial: ',
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
                    path: `src/ui/partials/${data.folder.toLowerCase()}/_${handlers.createFilename(
                        data.name
                    )}.tsx`,
                    templateFile: 'plop/page/partial-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${data.folder.toLowerCase()}/_${handlers.createFilename(
                        data.name
                    )}.styled.tsx`,
                    templateFile: 'plop/page/page-style-template.hbs',
                },
            ];

            return actions;
        },
    });
};
