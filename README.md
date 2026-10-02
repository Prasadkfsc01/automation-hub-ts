# ERPNext Playwright Cucumber Automation Framework

End-to-end test automation framework built with **Playwright, TypeScript and Cucumber**, supporting both **UI and API testing**.

The framework demonstrates a scalable QA automation architecture including Page Object Model, reusable actions, API clients, test data utilities, environment configuration, reporting and CI/CD integration.

## Tech Stack

- Playwright
- TypeScript
- Cucumber / BDD
- Node.js
- Playwright APIRequestContext
- GitHub Actions

## Framework Features

- UI automation with Playwright
- API automation using Playwright APIRequestContext
- Cucumber BDD feature files
- Page Object Model
- Reusable Actions layer
- API client layer
- Typed request/response models
- Environment-based configuration
- Token authentication support
- Dynamic test data generation
- API test-data cleanup
- Screenshots on UI failures
- HTML/Cucumber reporting
- Tag-based test execution
- TypeScript type checking
- Github DevOps CI/CD integration

## Project Structure

```text
src/
├── actions/
│   ├── HomeActions.ts
│   └── LoginActions.ts
│
├── api/
│   ├── ApiClient.ts
│   ├── AuthApi.ts
│   └── UserApi.ts
│
├── config/
│   ├── browser.config.ts
│   └── environment.config.ts
│
├── features/
│   ├── ui/
│   │   └── launch.feature
│   └── api/
│       └── user.api.feature
│
├── hooks/
│   └── hooks.ts
│
├── models/
│   ├── AuthToken.ts
│   ├── ApiResponse.ts
│   └── User.ts
│
├── pages/
│   ├── HomePage.ts
│   └── LoginPage.ts
│
├── step-definitions/
│   ├── ui/
│   │   ├── launch.steps.ts
│   │   └── login.steps.ts
│   └── api/
│       └── users-api.steps.ts
│
├── support/
│   └── world.ts
│
└── utils/
    └── TestDefaults.ts
```

## Installation

Clone the repository:

```git clone <repository-url>
cd erpnext-pw-cucumber
```

Install dependencies:

```
npm ci
```

Install Playwright browsers:

```
npx playwright install
```

## Environment Configuration

Create a local .env file using .env.example.

```
BASE_URL=
API_BASE_URL=
TEST_USERNAME=
TEST_PASSWORD=
API_TOKEN=
```

Do not commit the .env file. Environment-specific values and credentials should be supplied through local environment variables or CI/CD secret variables.

## Running Tests

```
Run all tests:
npm run test
```

Run UI tests:

```
npm run test -- --tags "@ui"
```

Run API tests:

```
npm run test -- --tags "@api"
```

Run smoke tests:

```
npm run test -- --tags "@smoke"
```
