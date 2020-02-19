module.exports = {
    commit: [
        {
            value: 'all-local-changes-in-tracked-files',
            name: 'all local changes in tracked files',
            usage: 'git commit -a'
        },
        {
            value: 'all-stages-changes',
            name: 'all stages changes',
            usage: 'git commit -m \x1b[92m<message>\x1b[39m',
            note: 'Replace \x1b[92m<message>\x1b[39m with your commit message.'
        }
    ],
    configure: [
        {
            value: 'name-and-email-address',
            name: 'name and email address',
            usage:
                'git config --global user.name "username" \n' +
                '\n' +
                'git config --global user.email "email address"',
            note:
                'Your username and email address should be the same as the one used with your git hosting provider i.e. github, bitbucket, gitlab etc'
        },
        {
            value: 'default-editor',
            name: 'default editor',
            usage: 'git config --global core.editor "vim"',
            note: 'Change default editor to vim.'
        },
        {
            value: 'color',
            name: 'color',
            usage: 'git config --global color.ui auto',
            note: 'Enables helpful colorization of command line output'
        },
        {
            value: 'add-the-GPG-key',
            name: 'add the GPG key',
            usage:
                'git config --global user.signingkey \x1b[92m<your-secret-gpg-key>\x1b[39m',
            note:
                'Git is cryptographically secure, but it’s not foolproof. If you’re taking work from others on the internet and want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG.'
        }
    ],
    revert: [
        {
            value: 'a-specific-commit',
            name: 'a specific commit',
            usage: 'git revert \x1b[92m<commit-hash>\x1b[39m',
            note: 'Use git log to see the hash of each commit'
        },
        {
            value: 'to-last-commit',
            name: 'to last commit',
            usage: 'git reset --hard'
        },
        {
            value: 'to-last-commit-on-remote-branch',
            name: 'to last commit on remote branch',
            usage:
                'git reset --hard \x1b[92m<repo>\x1b[39m/\x1b[92m<branch>\x1b[39m'
        }
    ],
    initialize: [
        {
            value: 'a-new-repository',
            name: 'a new repository',
            note: 'Make sure you are in the right directory',
            usage: 'git init'
        }
    ],
    modify: [
        {
            value: 'my-last/latest-commit-message',
            name: 'my last/latest commit message',
            usage: 'git commit --amend'
        },
        {
            value: 'my-last-commit-but-leave-the-commit-message-as-is',
            name: 'my last commit but leave the commit message as is',
            usage: 'git add . \ngit commit --amend --no-edit'
        },
        {
            value: "repo's-remote-url",
            name: "repo's remote url",
            usage:
                'git remote set-url \x1b[92m<alias>\x1b[39m \x1b[92m<url>\x1b[39m',
            note: '\x1b[92m<alias>\x1b[39m is your remote name e.g origin'
        }
    ],
    show: [
        {
            value:
                'status-of-project-including-staged,-unstaged-and-untracked-files',
            name:
                'status of project including staged, unstaged and untracked files',
            usage: 'git status'
        },
        { value: 'commit-logs/history', name: 'commit logs/history' },
        {
            value: 'uncommitted-changes',
            name: 'uncommitted changes',
            usage: 'git diff'
        },
        {
            value: 'committed/staged-changes',
            name: 'committed/staged changes',
            usage: 'git diff --staged'
        },
        {
            value: "repo's-remote-url",
            name: "repo's remote url",
            usage: 'git remote -v'
        },
        { value: 'stash', name: 'stash', usage: 'git stash list' },
        {
            value: 'branches',
            name: 'branches',
            usage: 'git branch',
            note: 'The active branch is prefixed with *'
        },
        { value: 'tags', name: 'tags', usage: 'git tag' }
    ],
    delete: [
        {
            value: 'a-branch',
            name: 'a branch',
            usage: 'git branch -D \x1b[92m<branch name>\x1b[39m'
        },
        { value: 'multiple-branches', name: 'multiple branches' },
        {
            value: 'a-tag',
            name: 'a tag',
            usage: 'git tag -d v\x1b[92m<tag version>\x1b[39m'
        },
        {
            value: 'remote',
            name: 'remote',
            usage: 'git remote rm \x1b[92m<remote>\x1b[39m'
        },
        {
            value: 'untracked-files',
            name: 'untracked files',
            usage: 'git clean -\x1b[92m<flag>\x1b[39m',
            note:
                'replace -\x1b[92m<flag>\x1b[39m with:\n' +
                ' -i for interactive command\n' +
                ' -n to preview what will be removed\n' +
                ' -f to remove forcefully\n' +
                ' -d to remove directories\n' +
                ' -X to remove ignored files\n' +
                ' -x to remove ignored and non-ignored files'
        },
        {
            value: 'files-from-index',
            name: 'files from index',
            usage: 'git rm --cached \x1b[92m<file or dir>\x1b[39m',
            note:
                'Use this option to unstage and remove paths only from the index. Working tree files, whether modified or not, will be left alone.'
        },
        {
            value: "local-branches-that-don't-exist-at-remote",
            name: "local branches that don't exist at remote",
            usage: 'git remote prune \x1b[92m<remote-name>\x1b[39m',
            note:
                'Use the --dry-run option to report what branches will be pruned, but do not actually prune them'
        },
        {
            value: 'files-from-old-commits',
            name: 'files from old commits',
            usage:
                'git filter-branch --index-filter \n' +
                "'git rm --cached --ignore-unmatch path/to/mylarge_file' \n" +
                '--tag-name-filter cat -- --all\n' +
                '\n' +
                "filter-branch keeps backups too, so the size of the repo won't decrease immediately unless you expire the reflogs and garbage collect:\n" +
                '\n' +
                'rm -Rf .git/refs/original       # careful\n' +
                'git gc --aggressive --prune=now # danger',
            note:
                "Like the rebasing option described before, filter-branch is rewriting operation. If you have published history, you'll have to --force push the new refs."
        }
    ],
    'compare-two-commits': [
        {
            value: 'and-output-result-in-the-terminal',
            name: 'and output result in the terminal',
            usage:
                'git diff \x1b[92m<sha1>\x1b[39m \x1b[92m<sha2>\x1b[39m | less',
            note:
                'sha1 and sha2 are the sha hash of the commits you want to compare.'
        },
        {
            value: 'and-output-result-to-a-file',
            name: 'and output result to a file',
            usage:
                'git diff \x1b[92m<sha1>\x1b[39m \x1b[92m<sha2>\x1b[39m >\x1b[39m diff.txt',
            note:
                'sha1 and sha2 are the sha of the commits you want to compare. \n' +
                '\n' +
                'diff.txt is the file you want to store the contents of the diff'
        }
    ],
    clone: [
        {
            value: 'existing-repo-into-a-new-directory',
            name: 'existing repo into a new directory',
            usage:
                'git clone \x1b[92m<repo-url>\x1b[39m \x1b[92m<directory>\x1b[39m',
            note:
                'The repo is cloned into the specified directory\n' +
                '\n' +
                'Replace "directory" with the directory you want'
        },
        {
            value: 'existing-repo-into-the-current-directory',
            name: 'existing repo into the current directory',
            usage: 'git clone \x1b[92m<repo-url>\x1b[39m .',
            note:
                'The repo is cloned into the current directory\n' +
                '\n' +
                'The current directory is represented with a "." (period)'
        },
        {
            value:
                'existing-repo-along-with-submodules-into-the-current-directory',
            name:
                'existing repo along with submodules into the current directory',
            usage:
                'git clone --recurse-submodules \x1b[92m<repo-url>\x1b[39m .',
            note:
                'If git version is under 2.13, use --recursive option instead.'
        },
        {
            value: 'submodules-after-cloning-existing-repo',
            name: 'submodules after cloning existing repo',
            usage: 'git submodule update --init --recursive'
        }
    ],
    ignore: [
        {
            value: 'all-files-in-a-directory',
            name: 'all files in a directory',
            usage: '\x1b[92m<dir name>\x1b[39m/*',
            note:
                'This must be added to .gitignore file\n' +
                '\n' +
                'Replace "dir name" with name of directory whose files you want git to ignore'
        },
        {
            value: 'all-files-of-a-specific-type',
            name: 'all files of a specific type',
            usage: '*.\x1b[92m<filename extension>\x1b[39m',
            note:
                'This must be added to .gitignore file\n' +
                '\n' +
                'Replace "filename extension" with the extension of the files you want git to ignore\n' +
                '\n' +
                'For example *.py tells git to ignore all python files in the repository'
        }
    ],
    help: [
        {
            value: 'about-a-command',
            name: 'about a command',
            usage: 'append --help to the command',
            note: 'e.g. git merge --help\n\nType q to quite terminal'
        }
    ],
    add: [
        {
            value: 'new-changes',
            name: 'new changes',
            usage: 'git add \x1b[92m<file.ext>\x1b[39m',
            note:
                'To add all the files in the current directory, use "git add ."\n' +
                '\n' +
                'To add a directory use "git add \x1b[92m<directory>\x1b[39m"'
        },
        { value: 'a-new-branch', name: 'a new branch' },
        {
            value: 'new-remote-repo',
            name: 'new remote repo',
            usage:
                'git remote add \x1b[92m<shortname>\x1b[39m \x1b[92m<url>\x1b[39m'
        },
        {
            value: 'alias',
            name: 'alias',
            usage:
                'git config --global alias.\x1b[92m<alias>\x1b[39m \x1b[92m<command>\x1b[39m',
            note:
                'e.g. git config --global alias.st status. Typing git st in the terminal now does the same thing as git status'
        },
        {
            value: 'annotated-tag',
            name: 'annotated tag',
            usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push --tags'
        },
        {
            value: 'annotated-tag-for-old-commit',
            name: 'annotated tag for old commit',
            usage:
                "git tag -a v1.2 -m 'version 1.2' \x1b[92m<commit-hash>\x1b[39m\n" +
                '\n' +
                'git push --tags'
        }
    ],
    push: [
        {
            value: 'non-existent-remote-branch',
            name: 'non-existent remote branch',
            usage: 'git push -u origin \x1b[92m<branchname>\x1b[39m'
        }
    ],
    rename: [
        { value: 'branch', name: 'branch' },
        { value: 'file', name: 'file', usage: 'git mv file_from file_to' },
        {
            value: 'remote-url',
            name: 'remote url',
            usage:
                'git remote rename \x1b[92m<oldname>\x1b[39m \x1b[92m<newname>\x1b[39m'
        }
    ],
    merge: [
        {
            value: 'another-branch-to-current-branch',
            name: 'another branch to current branch',
            usage: 'git merge \x1b[92m<branch-name>\x1b[39m'
        },
        {
            value: 'merge-a-single-file-from-one-branch-to-another',
            name: 'merge a single file from one branch to another',
            usage:
                'git checkout \x1b[92m<branch name>\x1b[39m \x1b[92m<path to file>\x1b[39m --patch'
        }
    ],
    squash: [
        {
            value: 'commits-in-pull-request-into-single-commit',
            name: 'commits in pull request into single commit',
            usage: 'git rebase -i \x1b[92m<branch name>\x1b[39m',
            note:
                'Make sure that latest commits are fetched from upstream.\n' +
                '\n' +
                'For example (assuming you have a remote named upstream):\n' +
                '\n' +
                'git fetch upstream\n' +
                'git rebase -i upstream/master\n' +
                '\n' +
                'Change "pick" to "squash" for the commits you wish to squash and save.\n' +
                '\n' +
                'git push origin \x1b[92m<topic branch>\x1b[39m --force-with-lease'
        },
        {
            value: 'last-n-number-of-commit-into-one',
            name: 'last n number of commit into one',
            usage:
                'git reset --soft HEAD~N\n' +
                'git commit add .\n' +
                'git commit -m \x1b[92m<message>\x1b[39m',
            note:
                "Replace N with the number of commits you want to squash and \x1b[92m<message>\x1b[39m with your commit message. You can use the command 'git log' to view your commit history"
        }
    ],
    debug: [
        {
            value: 'binary-search',
            name: 'binary search',
            usage:
                'git bisect start\n' +
                'git bisect bad                 # Current version is bad\n' +
                'git bisect good v2.13          # v6.12 is known to be good',
            note:
                'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar to the following:\n' +
                'Bisecting: 675 revisions left to test after this (roughly 10 steps)\n' +
                'You should now compile the checked-out version and test it. If that version works correctly, type\n' +
                '\n' +
                'git bisect good\n' +
                '\n' +
                'If that version is broken, type\n' +
                '\n' +
                'git bisect bad\n' +
                '\n' +
                'Then git bisect will respond with something like\n' +
                '\n' +
                'Bisecting: 337 revisions left to test after this (roughly 9 steps)\n' +
                '\n' +
                'Keep repeating the process: compile the tree, test it, and depending on whether it is good or bad run git bisect good or git bisect bad to ask for the next commit that needs testing.\n' +
                'Eventually there will be no more revisions left to inspect, and the command will print out a description of the first bad commit. The reference refs/bisect/bad will be left pointing at that commit.\n' +
                'After a bisect session, to clean up the bisection state and return to the original HEAD, issue the following command:\n' +
                '\n' +
                'git bisect reset'
        },
        {
            value: 'who-modified-each-lines',
            name: 'who modified each lines',
            usage:
                'git blame -L \x1b[92m<number-line-start>\x1b[39m,\x1b[92m<number-line-end>\x1b[39m \x1b[92m<filename>\x1b[39m',
            note:
                'The -L option will restrict the output to the requested line range\n'
        },
        {
            value: 'search-in-files',
            name: 'search in files',
            usage: 'git grep -n \x1b[92m<your_text_or_expression>\x1b[39m',
            note:
                'Print lines matching a pattern.\n' +
                'Option -n to display the numbering of lines in which there are matches'
        }
    ],
    recover: [
        {
            value:
                'show-hashes-dangling-commits-after-hard-reset-to-previous-commit',
            name:
                'show hashes dangling commits after hard reset to previous commit',
            usage: 'git reflog',
            note:
                'alternative: git log -g. For recovery use\n' +
                'git checkout -b \x1b[92m<recovery>\x1b[39m \x1b[92m<hash>\x1b[39m'
        },
        {
            value: 'show-hashes-removed-branch-or-other-git-objects',
            name: 'show hashes removed branch or other git objects',
            usage: 'git fsck --full',
            note:
                'show hashes all dangling git objects. For recovery use\n' +
                'git checkout -b \x1b[92m<recovery>\x1b[39m \x1b[92m<hash>\x1b[39m'
        }
    ],
    rebase: [
        {
            value: 'an-origin-branch-into-my-working-branch',
            name: 'an origin branch into my working branch',
            usage: 'git pull --rebase orgin \x1b[92m<branch name>\x1b[39m',
            note:
                'Rebase an origin branch into working branch. Replace \x1b[92m<branch name>\x1b[39m with the branch you are pulling'
        },
        {
            value: 'a-local-branch-into-my-working-branch',
            name: 'a local branch into my working branch',
            usage: 'git pull --rebase \x1b[92m<branch name>\x1b[39m',
            note:
                'Rebase another local branch into working branch. Replace \x1b[92m<branch name>\x1b[39m with the branch you are pulling'
        },
        {
            value: 'and-skip-a-commit',
            name: 'and skip a commit',
            usage: 'git rebase --skip',
            note:
                'During rebase, git might not be able to automatically apply commits due to conflicts. You can use this command to discard of your own changes in the current commit and apply the changes from an incoming branch'
        },
        {
            value: 'and-continue-after-resolving-conflicts',
            name: 'and continue after resolving conflicts',
            usage: 'git rebase --continue',
            note:
                'During rebase, git might not be able to automatically apply commits due to conflicts. You can resolve this conflicts manually and use this command to continue your rebase operation'
        }
    ],
    synchronize: [
        {
            value: 'a-branch-in-a-fork',
            name: 'a branch in a fork',
            usage:
                'git fetch \x1b[92m<remote-repo>\x1b[39m \n' +
                '\n' +
                'git checkout \x1b[92m<branch-name>\x1b[39m \n' +
                '\n' +
                'git merge \x1b[92m<remote-repo>\x1b[39m/\x1b[92m<branch-name>\x1b[39m',
            note: 'You need to add a remote repo for your fork first.'
        }
    ],
    stash: [
        {
            value: '(un)tracked-files',
            name: '(un)tracked files',
            usage: 'git stash',
            note:
                'To stash with a customized message use git stash save \x1b[92m\x1b[92m<message>\x1b[39m\n' +
                '\n' +
                'To stash untracked files git stash save -u'
        },
        {
            value: 'view-list-of-stashed-changes',
            name: 'view list of stashed changes',
            usage: 'git stash list'
        },
        { value: 'apply', name: 'apply' },
        {
            value: 'view-the-contents-of-a-stash',
            name: 'view the contents of a stash',
            usage: 'git stash show -p \x1b[92m\x1b[92m<stash id>\x1b[39m',
            note:
                'You can leave out the stash id if you want the contents of the latest stash'
        },
        { value: 'delete', name: 'delete' },
        {
            value: 'create-a-new-branch-and-apply-stash',
            name: 'create a new branch and apply stash',
            usage:
                'git stash branch \x1b[92m\x1b[92m\x1b[92m<branch name>\x1b[39m \x1b[92m<stash id>\x1b[39m'
        }
    ]
};
