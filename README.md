# Hello World with Angular, from scratch !!!

The intent of this project is to understand how Angular framework works creating a project from scratch and step by step. 
This project must not be considered as a base line from other developments that will turn into application runing on productive environtments.
![angular one sheet](https://www.2code.com.mx/static/media/1-sheel-angular.png)

## A) Requirements

- [Node.js v18.12.1](https://nodejs.org/es/)
- [Typescript 4.9.5](https://www.npmjs.com/package/typescript)
- [Angular CLI 15.2.1](https://angular.io/cli)
- Empty directory ng-from-scratch

## B) Angular application from scratch, Step by step 
Within the empty directory "ng-from-scratch" follow the below steps:

#### 1) Init Node.js project

> npm init

#### 2) Init typescript project

> tsc --init 

#### 3) Create an angular.json file

> touch angular.json

#### 4) Add node dependencies and define scripts 

    {
      "name": "ng-from-scratch"
      "version": "1.0.0"
      "description": "angular-from-scratch"
      "scripts": {
        "build": "ng build"
        "serve": "ng serve",   
        "test": "ng test
      }
      "dependencies": {
        "@angular/common": "^15.2.0"
        "@angular/compiler": "^15.2.0"
        "@angular/core": "^15.2.0"
        "@angular/forms": "^15.2.0"
        "@angular/platform-browser": "^15.2.0"
        "@angular/platform-browser-dynamic": "^15.2.0"
        "rxjs": "~7.8.0"
        "tslib": "^2.3.0"
        "zone.js": "~0.12.0
      }
      "devDependencies": {
        "@angular-devkit/build-angular": "^15.2.0"
        "@angular/cli": "~15.2.0"
        "@angular/compiler-cli": "^15.2.0"
        "typescript": "~4.9.4
      }
    }

#### 5) Install dependencies

> npm i 


#### 6) Create the next first file structure for Application Bootstrapping

    src
    |-- index.html
    |-- styles.css
    |-- main.ts

#### 7) Add to angular.json next lines for Application bootstrapping

    {
      "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
      "version": 1,
      "newProjectRoot": "projects",
      "projects": {
        "ng-from-scratch": {
          "projectType": "application",
          "schematics": {},
          "root": "",
          "sourceRoot": "src",
          "prefix": "app",
          "architect": {
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                "outputPath": "dist/ng-from-scratch",
                "index": "src/index.html",
                "main": "src/main.ts",
                "styles": [
                  "src/styles.css"
                ],
                "polyfills": [
                  "zone.js"
                ],
                "tsConfig": "tsconfig.app.json",
                "assets": [],            
                "scripts": []
              },
              "configurations": {
                "development": {
                  "buildOptimizer": false,
                  "optimization": false,
                  "vendorChunk": true,
                  "extractLicenses": false,
                  "sourceMap": true,
                  "namedChunks": true
                }
              },
              "defaultConfiguration": "production"
            },
            "serve": {
              "builder": "@angular-devkit/build-angular:dev-server",
              "configurations": {
                "development": {
                  "browserTarget": "ng-from-scratch:build:development"
                }
              },
              "defaultConfiguration": "development"
            }
          }
        }
      }
    }

#### 8) Add to tsconfig.app.json with the below content

    {
      "extends": "./tsconfig.json",
      "compilerOptions": {
        "outDir": "./out-tsc/app",
        "types": []
      },
      "files": [
        "src/main.ts"
      ],
      "include": [
        "src/**/*.d.ts"
      ]
    }

#### 9) Test the application bootstrapping

> ng serve

The output must be as shown below

    √ Compiled successfully.
    ✔ Browser application bundle generation complete.

    Initial Chunk Files | Names   | Raw Size
    runtime.js          | runtime |  6.53 kB |

    4 unchanged chunks

    Build at: 2023-03-03T18:56:34.932Z - Hash: c8d6fea0c9e7478f - Time: 76ms

    √ Compiled successfully.
---

## C) Fist Module and component

#### 1) Create new files and directories
Within **"./src"** directory, create a new directory **"./app"**. 
Since a module needs at least one component, it is needed to create one. So that create a new directory **"component-one"** within the new directory **"./app"**.
After that create new empty source code files until you had the new file structure as shown below

    src
    |-- index.html
    |-- styles.css
    |-- main.ts
    |-- app
        |-- app.module.ts
        |-- component-one
            |-- component-one.ts
            |-- component-one.html
            |-- component-one.css

#### 2) Create the first component
Modify the file **"component-one.html"** to include our "Hello world" message using a variable that will be declare within the **component-one.ts** file

    <div class="message">{{message}}</div>

Modify the file **component-one.ts** to create the first component

    import { Component } from "@angular/core";

    @Component({
      selector: 'component-one',
      templateUrl: './component-one.html',
      styleUrls: ['./component-one.css']
    })
    export class ComponentOne {
      message : string = "Hello World !!!";
    }

and finally create a basic style for this component within **component-one.css**

    .message {
      color: red;
      font-size: 2rem;
      font-weight: bold;
    }

modify the **tsconfig.json** to enable the use of decorators such as: Component, NgModule, etc.
And also the version of javascript for the final source code outputs

    {
      "compileOnSave": false,
      "compilerOptions": {
        "baseUrl": "./",
        "outDir": "./dist/out-tsc",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "sourceMap": true,
        "declaration": false,
        "downlevelIteration": true,
        "experimentalDecorators": true,
        "moduleResolution": "node",
        "importHelpers": true,
        "target": "ES2022",
        "module": "ES2022",
        "useDefineForClassFields": false,
        "lib": [
          "ES2022",
          "dom"
        ]
      },
      "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
      }
    }

#### 3) Create a new module and configure the Component Bootstrapping

Modify the **app.module.ts** to declare de main component for this Module 

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ComponentOne } from './component-one/component-one';

    @NgModule({
      declarations: [ComponentOne],
      imports: [BrowserModule],
      providers: [],
      bootstrap: [ComponentOne]
    })
    export class AppModule { }

#### 4) Module Bootstrapping
Now that we have the application bootstrapping with empty files and a first module that boot the first component it is necessary to link this module with the application for bootstrapping chaining. So that The application will realize there is a module that must be loaded at the begining when the application started and the module will register a component for bootstrap.

**main.ts**

    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app/app.module';

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));

#### 5) The End, using the first component 

Now it is time to use the first component adding a tag that is defined by the property selector within the Component decorator: **selector: 'component-one',**. To do this we can create a html
template as follow.

**index.html**

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Angular from scratch</title>
    </head>
    <body>
      <component-one></component-one>
    </body>
    </html>

**Test the application**
> ng serve

    ✔ Browser application bundle generation complete.

    Initial Chunk Files   | Names         |  Raw Size
    vendor.js             | vendor        |   1.71 MB |
    polyfills.js          | polyfills     | 314.28 kB |
    styles.css, styles.js | styles        | 209.30 kB |
    runtime.js            | runtime       |   6.53 kB |
    main.js               | main          |   4.71 kB |

                          | Initial Total |   2.23 MB

    Build at: 2023-03-04T16:10:52.946Z - Hash: 4224d1a84f7dfe82 - Time: 3939ms

    ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


    √ Compiled successfully.

![final output](https://www.2code.com.mx/static/media/angular-from-scratch-end-view.png)