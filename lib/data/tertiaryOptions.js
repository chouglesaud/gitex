module.exports = {
    'commit-logs/history': [
        {
            value: 'all',
            name: 'all',
            usage: 'git log',
            note: 'Type q in the terminal to exit the logs'
        },
        {
            value: 'for-last-xxx-number-of-commits',
            name: 'for last xxx number of commits',
            usage: 'git log -n',
            note: 'Replace n with number of commits e.g. git log -2'
        },
        {
            value: 'since-a-particular-period',
            name: 'since a particular period',
            usage: 'git log --since=period',
            note:
                'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n' +
                '\n' +
                ' Similar flags are --until, --before, --after'
        },
        {
            value: 'with-each-commit-on-one-line',
            name: 'with each commit on one line',
            usage: 'git log --oneline'
        },
        {
            value: 'with-the-patches-introduced-in-each-commit',
            name: 'with the patches introduced in each commit',
            usage: 'git log -p'
        }
    ],
    branch: [
        {
            value: 'while-working-in-the-branch',
            name: 'while working in the branch',
            usage: 'git branch -m \x1b[92m<new name>\x1b[39m'
        },
        {
            value: 'from-outside-the-branch',
            name: 'from outside the branch',
            usage:
                'git branch -m \x1b[92m<old name>\x1b[39m \x1b[92m<new name>\x1b[39m'
        }
    ],
    'a-new-branch': [
        {
            value: 'but-remain-in-the-current-branch-I-am-working-from',
            name: 'but remain in the current branch I am working from',
            usage: 'git branch \x1b[92m<new name>\x1b[39m'
        },
        {
            value: 'and-switch-to-the-new-branch',
            name: 'and switch to the new branch',
            usage: 'git checkout -b \x1b[92m<new name>\x1b[39m'
        },
        {
            value: 'from-another-branch',
            name: 'from another branch',
            usage:
                'git checkout -b \x1b[92m<new name>\x1b[39m \x1b[92m<another branch>\x1b[39m'
        }
    ],
    apply: [
        {
            value: 'latest-stash',
            name: 'latest stash',
            usage: 'git stash apply'
        },
        {
            value: 'a-specific-stash',
            name: 'a specific stash',
            usage: 'git stash apply \x1b[92m<stash id>\x1b[39m',
            note:
                "The stash id can be gotten when you run git stash list. It's usually in this format: stash@{index} e.g. stash@{0}"
        },
        {
            value: 'and-delete-stash',
            name: 'and delete stash',
            usage: 'git stash pop \x1b[92m<stash id>\x1b[39m',
            note:
                'Stash id optional. Add it if you want to apply and delete a specific stash otherwise leave to pop the latest stash'
        }
    ],
    delete: [
        {
            value: 'all-stashed-changes',
            name: 'all stashed changes',
            usage: 'git stash clear'
        },
        {
            value: 'specific-stash',
            name: 'specific stash',
            usage: 'git stash drop \x1b[92m<stash id>\x1b[39m'
        }
    ],
    'multiple-branches': [
        {
            value: 'by-name',
            name: 'by name',
            usage:
                'git branch -D \x1b[92m<branch name>\x1b[39m \x1b[92m<branch name>\x1b[39m \x1b[92m<branch name>\x1b[39m'
        },
        {
            value: 'by-pattern',
            name: 'by pattern',
            usage:
                'git branch | grep \x1b[92m<regex pattern>\x1b[39m | xargs git branch -D',
            note:
                `e.g. git branch | grep "-" | xargs git branch -D will delete all branches that have '-' in their names or git branch | grep -v "master\\|staging" | xargs git branch -D will delete all branches except staging and master.\n` +
                '\n' +
                'NB: Always put your regex pattern in quotes'
        }
    ]
};
