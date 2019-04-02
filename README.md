# ✍️ Write with me

A real-time collaborative blog post editor built with GraphQL, React, React Markdown, & AWS AppSync.

> Try it out at [www.writewithme.dev](https://www.writewithme.dev/#/)

![](writewithme.gif)

### Base schema

Here's the base schema:

```graphql
type Post @model {
  id: ID!
  clientId: ID!
  markdown: String!
  title: String!
  createdAt: String
}
```

We have a `Post` type that has a few properties. The most important property is the markdown. This is where we are keeping up with the state of the post.

We also have a `clientId` to properly handle GraphQL subscriptions on the client.

## Launching the App

### Amplify Console

1. Fork the repo into your own account.

2. In the [Amplify Console](https://console.aws.amazon.com/amplify/home), click __Get Started__ under __Deploy__.

3. Choose your repo & branch.

### AWS Amplify CLI

1. Clone the repo

```sh
git clone https://github.com/dabit3/write-with-me.git
```

2. Change into the directory & install dependencies

```sh
cd write-with-me

npm install
```

3. Initialize the Amplify backend

```sh
amplify init
```

4. Push the application into your account

```sh
amplify push
```
