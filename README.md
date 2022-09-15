# Bank MCC

## Introduction
Being in the banking industry, an audit trail to anything that we do in an application is super critical. We have an application called Mission Control Center (MCC) that handles the **configurations** of other **applications**. The configurations are mainly classified into two - Metadata and technical data. An example of metadata is the name of the application, the owner of application and configuration manager of the application. Technical data is mainly a set of roles and a set of permissions associated with the role.

MCC provides an option to update both technical and metadata from time to time that usually goes through an approval process. These approved updates need to be *versioned*. Any **user** should be able to see all the versions of configuration of all applications.

## Get started
So first of all, clone the repo and install the dependencies
```
$ git clone https://github.com/leandrocunha/bank-mcc.git
$ cd bank-mcc
$ ~/bank-mcc/ npm install
```
After all instalation, you only need run the dev environment e access the URL that will appear in the console in your browser
```
$ npm run dev
```
## How it works?
Once the dev ser is running and you are able to access the provided URL in your browser, the first that you need to do is like "seed" some data.

I the sidebar left, add first some **Users** and after please add some **Applications**. After this first step, you can start creating some **Configurations**

Now you are able to access the Applications page, check a list of applications and click to check the Applications Detail's page.

In the Application Detail's page you will see a "header" page with some details and below you will see a list of configuration versions. Each *delta* configuration has a button to apply this change in the snapshot. In this case you will be able to make a kind of "rollback" for each version you want.

After click in the apply button you should see the applied changes in the "header" page.

## Things do consider from my side
- I tried to do maximum to delivery the app working from backend to frontend and with a excelent test coverage.

- From the Frontend perspecive, first I did some research to find a N26 Styleguide to follow and give an better look and feel to the app. How I dind't find, I just use the website CSS variable to reach some good identity result.

- From the Backend perspective, I decide to start from the easy approach, with a local device to save the configuration files

- From the general development perspective, I choose Vite to speed up the initial process considering a complete dev environment with tests, hotreload, compile velocity and etc.


## My plan
After a few days I had a plan to follow, like:
 - Modularize each UI component using the Atomic design approach
 - Create a kind of UI library and maybe put it in the simple way in a tool like Storybook
 - Change the vanilla css to SASS to enjoiy max the BEM methodology and make things more reausable
 - Change the local device storage to use an online environment like put it in the AWS to explore my API integration knowledge.
 - Create some kind of mechanism to set a threshold to travel point in the versions to restore it. For instance, create a new snapshot for each 10, 20 times that one delta is created.
 - Create a mini IAM system to create users and define different kinds of roles and permissions

## What's going wrong
I got stacked two times, the first one I got trouble with the Typescript, to set correctly some specific data. The second one was to mock the external lib in the unit test

Both I spent to much time trying to solve the issues.

## Improvements & Enhancements
- Enhancement in the arquitecture to better files/folder organization
- A complete implementation of Typescritpt, to make sure that sensible data will traffic safely between the sistem and make the live easier to the new joiners
onde TS can provide a good `built-in`documentation based on yout IDE (I'm use vscode)
- Increase the application coverage, tests are important mainly fo sensible data.

## How do I track my work?
- [Github Project](https://github.com/users/leandrocunha/projects/1)
- [Issues](https://github.com/leandrocunha/bank-mcc/issues?q=is%3Aissue+is%3Aclosed)

---
Here below are my first step, trying to clarify the ideias and putting some topics to start.

## Assumptions
### 1. Which tech stack do you will use to the app?
For the MVP let assume React/Typescript for the Frontend, Typescript for the Backend, local device as a database.

### 2. Once React is a requirement, which approach do you use to kickstart the MVP?
Let's choose Vite and Vitest to setup a complete development environment and unit test

### 3. Which approach do you use as a database?
For the MVP and initial assumption lets save the configuration versions locally

### 4. In general, how MCC will looks like?
So we have users that can create configurations for certains applications. The configurations should be versioned and needs approval to be apply.

- [x] CRUD for User entity
- [x] CRUD for Configuration entity
- [x] CRUD for Application entity


### 5. How will you efficiently store the versions? Will you store the whole instance or just delta? Why?
For the MVP I will save all instance in separeted json files locally. Why? the fastes why to validate the ideia.

### 6. What parts will you test? How? Why?
The test should cover all the app, both frontend and backend 