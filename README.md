# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Step to step gitflow
```bash
$ git status: check status file


# get latest code from main branch
$ git pull

# create new an branch feature/xxx from main branch
$ git branch --show-current  (check current bracnh)
$ git checkout -b feature/hau-router

# add all file
$ git add .

# git commit -m "message ..."
$ git commit -m "update readme"

# push code

## option1: if remote branch doesn't have your branch
$ git push --set-upstream origin feature/tony-readme

## option2: if remote branch has your branch
$ git push

# create PR on github
1. click tab Pull requests
2. click "New Pull request" button
- base: xx -> target branch
- compare: xx -> sourcer branch
3. After select branch merge -> click "Create pull request" button
```


### Step to step deploy with netlify
1. https://app.netlify.com/ -> https://app.netlify.com/teams/xxxx/overview
2. click to "Add new site" -> Import an existing project -> deploy with github
3. Click your repository
4. click "Deploy"