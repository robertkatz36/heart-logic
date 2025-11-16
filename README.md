# Welcome to your Lovable project

## Project info



**URL**: https://lovable.dev/projects/4f57ead6-9975-4968-acfb-4bdd3b0d4e60

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4f57ead6-9975-4968-acfb-4bdd3b0d4e60) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & pnpm installed - [install with asdf](https://asdf-vm.com/guide/getting-started.html)



Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install pnpm version (if using asdf)
asdf install

# Step 4: Install the necessary dependencies.
pnpm i

# Step 5: Start the development server with auto-reloading and an instant preview.
pnpm run dev
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

## Resend Setup (for Contact Form)

The contact form uses Resend to send emails. To set it up:

1. Sign up at [Resend](https://resend.com/) (free tier: 3,000 emails/month)
2. Create an API key in the Resend dashboard
3. Add a domain or use the default `onboarding@resend.dev` for testing
4. Create a `.env.local` file in the root directory:
   ```sh
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```
5. Update `src/app/api/contact/route.ts` to change the `from` email address after verifying your domain

**Note**: For production, verify your domain in Resend and update the `from` field in the API route.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4f57ead6-9975-4968-acfb-4bdd3b0d4e60) and click on Share -> Publish.

**Note**: Don't forget to add your Resend environment variables (`RESEND_API_KEY` and `CONTACT_EMAIL`) in your hosting platform (Vercel, etc.)

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
