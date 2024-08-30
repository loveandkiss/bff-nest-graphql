<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).




## git关联远程仓库

```bash

# push an existing repository from the command line
git branch -M main
git remote add origin https://github.com/loveandkiss/bff-nest-graphql.git
git push -u origin main


# 或者
git branch -M main
git remote add origin https://github.com/loveandkiss/bff-nest-graphql.git
git push -u origin main
```


## 本项目使用 Code First

直接通过代码中的类型和装饰器定义 schema。适合 TypeScript 开发，提供更强的类型安全和自动生成 schema 的便利。

Nest offers two ways of building GraphQL applications, the code first and the schema first methods. 

You should choose the one that works best for you. 

Most of the chapters in this GraphQL section are divided into two main parts: one you should follow if you adopt code first, and the other to be used if you adopt schema first.

In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.


- 代码优先（Code First）
在这种方法中，你从 TypeScript 代码开始，利用装饰器（decorators）来定义 GraphQL 的 schema。
这种方式更加符合 Nest.js 的编程风格，并且能够充分利用 TypeScript 的类型系统。

- 模式优先（Schema First）





## playground 
本服务开启之后，在playground地址栏输入如下地址
http://127.0.0.1:9000/graphql


被改成如下访问地址：
http://127.0.0.1:9000/bff/graphql


```graphql
# Write your query or mutation here
query {
  product {
    exampleField
  }
}

```


## @Field()

The @Field() decorator accepts an optional type function (e.g., type => Int), and optionally an options object.

The type function is required when there's the potential for ambiguity between the TypeScript type system and the GraphQL type system. 
Specifically: it is not required for string and boolean types; it is required for number (which must be mapped to either a GraphQL Int or Float). 



## 创建或者修改

```graphql

mutation {
  createProduct(createProductInput: {
    name: "华为手机",
    price: 30
  }) {
    id,
    name,
    price
  }
}

```

定义 CreateProductInput: 描述 Mutation 输入参数的结构。
定义 Product: 描述返回结果的结构。




## 查询
```graphql

# 不带参数查询
query {
  products {
    id
    name
    price
  }
}



# 带参数查询
query ($id: Int!){
  product(id: $id) {
    id
    name
    price
  }
}

```