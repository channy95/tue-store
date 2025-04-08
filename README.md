# Welcome to TUE - Ties That Express Emotions

## Project info

**URL**: https://lovable.dev/projects/0ed2ff58-3c1c-4e8c-a3a4-b7d1bce42baf

## How to deploy using GitHub

To deploy this project using GitHub Pages:

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and sign in to your account.
   - Click the "+" icon in the top-right corner and select "New repository".
   - Name your repository (e.g., "tue-website").
   - Choose whether to make it public or private.
   - Click "Create repository".

2. **Push your code to GitHub**:
   ```sh
   # Initialize git in your project directory (if not already done)
   git init
   
   # Add the GitHub repository as remote
   git remote add origin https://github.com/your-username/your-repo-name.git
   
   # Add all files to git
   git add .
   
   # Commit the changes
   git commit -m "Initial commit"
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Set up GitHub Pages**:
   - Go to your repository on GitHub.
   - Click "Settings" tab.
   - Scroll down to "GitHub Pages" section.
   - Under "Source", select "main" branch and "/root" folder.
   - Click "Save".

4. **Deploy using GitHub Actions**:
   - Create a new file in your repository: `.github/workflows/deploy.yml`
   - Add the following content to the file:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v2

         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@4.1.4
           with:
             branch: gh-pages
             folder: dist
   ```

5. **Push this workflow file to GitHub**:
   ```sh
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

6. **Access your deployed website**:
   After the workflow runs successfully, your website should be available at:
   `https://your-username.github.io/your-repo-name/`

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0ed2ff58-3c1c-4e8c-a3a4-b7d1bce42baf) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0ed2ff58-3c1c-4e8c-a3a4-b7d1bce42baf) and click on Share -> Publish.

## Can I connect a custom domain to my project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
