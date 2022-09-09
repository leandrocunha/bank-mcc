# Bank MCC

## Introduction
Being in the banking industry, an audit trail to anything that we do in an application is super critical. We have an application called Mission Control Center (MCC) that handles the **configurations** of other **applications**. The configurations are mainly classified into two - Metadata and technical data. An example of metadata is the name of the application, the owner of application and configuration manager of the application. Technical data is mainly a set of roles and a set of permissions associated with the role.

MCC provides an option to update both technical and metadata from time to time that usually goes through an approval process. These approved updates need to be *versioned*. Any **user** should be able to see all the versions of configuration of all applications.

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