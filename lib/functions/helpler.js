/**
 *
 * @param {String} str
 * @example hello-world to hello world
 */
function replaceDashBySpace(str) {
    return str.replace(/-/g, ' ');
}

/**
 *
 * @param {String} note
 */
function displayNote(note) {
    console.log('\nNote:');
    console.log(`\n\x1b[91m${note}\x1b[39m\n`);
}
/**
 *
 * @param {String} usage
 */
function displayUsage(usage) {
    console.log(`\nUsage: ${usage}\n`);
}

function displayQuery(query1, query2, query3) {
    console.log(
        `? i want to ${replaceDashBySpace(query1)} ${replaceDashBySpace(
            query2
        )} ${replaceDashBySpace(query3)}`
    );
}

/**
 *
 * @param {Array} message
 */
function displayMessage(messages) {
    let fullMessage = 'i want to ';
    messages.forEach(message => {
        fullMessage += replaceDashBySpace(message);
    });

    return fullMessage;
}

/**
 *
 * @param {Array} arrayOfOptions
 * @param {String} optionValue
 * @description function return an item from arrayOfOptions(Array) that match with optionValue(String)
 */

function filterOption(arrayOfOptions, optionValue) {
    let option = null;
    arrayOfOptions.filter(item => {
        if (item.value === optionValue) {
            option = item;
        }
    });
    return option;
}

module.exports = {
    displayNote,
    displayUsage,
    displayQuery,
    filterOption,
    displayMessage
};
