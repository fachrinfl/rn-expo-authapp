## Project Overview

AuthApp is a React Native-based application designed to provide authentication features, utilizing libraries such as Formik, Redux Toolkit, and Yup for form handling, state management, and validation respectively. The project leverages Expo for development and testing.

<img src="https://github.com/user-attachments/assets/601d2d4c-064c-4824-a1a4-2dcd2ad29fdf" alt="Home Screen" width="200" />

---

## Project Setup

### Prerequisites

Ensure the following tools are installed:

- **Node.js**: Version 18.x
- **npm**: Version 11.x or higher
- **Expo CLI**: Latest version
- **EAS CLI**: Latest version

### Steps to Set Up the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fachrinfl/rn-expo-authapp.git
   cd rn-expo-authapp
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the application:**

   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

4. **Lint and format code:**

   ```bash
   npm run lint:fix
   ```

5. **Run tests:**

   ```bash
   npm run test
   ```

---

## Dependencies

### Core Dependencies

- **React Native**: Version `0.76.6`
- **Expo**: Version `~52.0.27`
- **Redux Toolkit**: Version `^2.5.0`
- **Formik**: Version `^2.4.6`
- **Yup**: Version `^1.6.1`

### Development Dependencies

- **Jest**: Version `^29.7.0`
- **@testing-library/react-native**: Version `^13.0.0`
- **ESLint**: Version `^8.57.1`
- **Prettier**: Version `^2.8.8`
- **TypeScript**: Version `^5.3.3`

---

## CI/CD Setup

### Overview

The CI/CD pipeline is configured using GitHub Actions. The pipeline performs the following:

1. Installs dependencies.
2. Lints and formats the code.
3. Runs unit tests.
4. Builds the app using Expo Application Services (EAS).

### Tools Used

- **GitHub Actions**: For workflow automation.
- **EAS**: For app building and version management.

### Build Triggers

The pipeline is triggered when a new tag matching `v*` is pushed to the repository.

### Workflow Configuration

The GitHub Actions workflow is defined in `.github/workflows/release-build.yml`:

```yaml
---
name: Build on Release Tag
on:
  push:
    tags:
      - v*
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🏗 Setup repo
        uses: actions/checkout@v3

      - name: 🏗 Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: npm

      - name: 🏗 Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: 📦 Install dependencies
        run: npm install --legacy-peer-deps

      - name: ✅ Lint and Fix Code
        run: npm run lint:fix

      - name: 🧪 Run Tests
        run: npm run test

      - name: 🚀 Build app
        id: build
        run: |
          eas build --platform android --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}

      - name: 🚀 Get Artifact URL and Upload to TestFairy
        run: |
          ARTIFACT_URL=$(eas build:list --platform android --status finished --limit 1 --json --non-interactive | jq -r '.[0].artifacts.buildUrl')

          echo "Downloading artifact from $ARTIFACT_URL..."
          curl -L $ARTIFACT_URL -o app-release.aab

          echo "Uploading to TestFairy..."
          curl -F "file=@app-release.aab" \
              -F "api_key=${{ secrets.TESTFAIRY_API_KEY }}" \
              https://upload.testfairy.com/api/upload
```

### Environment Variables

Set the following environment variables in your GitHub repository:

1. Navigate to **Settings** > **Secrets and variables** > **Actions**.
2. Add the following secret:

   - `EXPO_TOKEN`: Your Expo token for authentication.
   - `TESTFAIRY_API_KEY`: API key untuk TestFairy.

---
