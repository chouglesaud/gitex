const inquirer = require('inquirer');

const primaryOptions = require('./data/primaryOptions');
const secondaryOptions = require('./data/secondaryOptions');
const tertiaryOptions = require('./data/tertiaryOptions');

const {
    displayNote,
    displayUsage,
    displayQuery,
    displayMessage,
    filterOption
} = require('./functions/helpler');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'primaryValue',
            message: 'I want to',
            choices: primaryOptions
        }
    ])
    .then(primaryResult => {
        console.clear();
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'secondaryValue',
                    message: displayMessage([primaryResult.primaryValue]),
                    choices: secondaryOptions[primaryResult.primaryValue]
                }
            ])
            .then(secondaryResult => {
                const secondaryFilteredOption = filterOption(
                    secondaryOptions[primaryResult.primaryValue],
                    secondaryResult.secondaryValue
                );

                if (secondaryFilteredOption.usage) {
                    displayUsage(secondaryFilteredOption.usage);

                    if (secondaryFilteredOption.note) {
                        displayNote(secondaryFilteredOption.note);
                    }
                } else {
                    console.clear();
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'tertiaryValue',
                                message: displayMessage([
                                    primaryResult.primaryValue,
                                    ' ',
                                    secondaryResult.secondaryValue
                                ]),
                                choices:
                                    tertiaryOptions[
                                        secondaryResult.secondaryValue
                                    ]
                            }
                        ])
                        .then(tertiaryResult => {
                            console.clear();
                            displayQuery(
                                primaryResult.primaryValue,
                                secondaryResult.secondaryValue,
                                tertiaryResult.tertiaryValue
                            );
                            const tertiaryFilteredOption = filterOption(
                                tertiaryOptions[secondaryResult.secondaryValue],
                                tertiaryResult.tertiaryValue
                            );

                            displayUsage(tertiaryFilteredOption.usage);
                            if (tertiaryFilteredOption.note) {
                                displayNote(tertiaryFilteredOption.note);
                            }
                        });
                }
            });
    });
