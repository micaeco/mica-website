# MICA Website

This repository contains the source code for MICA's official website.

## Requirements

- Node.js (version 20 or later recommended)
- npm (comes with Node.js)

Note: While `package.json` specifies the Node.js version for the project, you need to have Node.js installed on your system to run npm commands.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/micaeco/mica-website.git
   cd mica-website
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prettier

## Project Structure

Our project follows a modular and scalable structure designed to enhance maintainability and separation of concerns. Here's an overview of the main directories and their purposes:

### `/src`

The source directory contains all the application code.

- `/app`: Contains the main application logic and routing structure.

  - `/(routes)`: Holds the route-specific pages and layouts.
  - `/api`: Houses API route handlers for server-side logic.

- `/components`: Reusable React components.

  - `/layout`: Components for the overall page structure.
  - `/common`: Shared UI components used across multiple pages.
  - `/sections`: Page-specific sections and components.

- `/hooks`: Custom React hooks for shared stateful logic.

- `/services`: Service modules for external API calls or complex business logic.

- `/styles`: Global styles and component-specific style modules.

- `/utils`: Utility functions and helper modules.

- `/types`: TypeScript type definitions and interfaces.

### `/public`

Static assets that are served directly to the client.

### Root Directory

The root directory contains configuration files for various tools and processes.

This structure is designed to be intuitive and scalable. As the project grows, new feature-specific folders can be added under the appropriate directories without needing to modify the overall structure.

## Environment Variables

Environment variables will be stored in `.env` (not committed to the repository). Contact a team member for the necessary variables when setting up the project locally.

## Deployment

The website is automatically deployed to Vercel when changes are pushed to the main branch. Only MICA Vercel team members can trigger successful deployments.

## Contributing

Please ensure you have the necessary permissions before contributing to this project. Contact the project maintainers for more information.

## Git Workflow

1. Starting a new task?

   ```
   git checkout main  # Switch to main branch
   git pull origin main  # Sync local main with remote
   git checkout -b feature-branch  # Create and switch to new feature branch
   ```

2. Made changes and want to save them?

   ```
   git status  # Check which files have changed
   git add .  # Stage all changes
   git commit -m "Descriptive message"  # Commit changes
   ```

3. Ready to push your changes?

   ```
   git push origin feature-branch  # Push your branch to remote
   ```

4. Feature complete and ready to merge?

   ```
   git checkout main  # Switch back to main branch
   git pull origin main  # Sync local main with remote
   git merge feature-branch  # Merge your feature branch into main
   git push origin main  # Push updated main to remote
   ```

5. Done with the feature branch?
   ```
   git branch -d feature-branch  # Delete local feature branch
   git push origin --delete feature-branch  # Delete remote feature branch
   ```

### Logging Commands

```
git status  # Check current status of your working directory
git log  # View commit history
git log --oneline  # Compact view of commit history
git log --graph --oneline --all  # Graphical view of branch history
git branch  # List local branches
git branch -a  # List all branches (local and remote)
git diff  # View unstaged changes
git diff --staged  # View staged changes
git remote -v  # List remote repositories
```

### Issue Templates

We use issue templates for better organization and consistency. When creating a new issue, please use the appropriate template:

- User Story: For new feature requests or enhancements
- Bug Fix: For reporting and tracking bugs

These templates help ensure that all necessary information is provided when creating issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
