# Hello World, with Angular from scratch !!!

## Description
The intent of this project is to realize how Angular framework works creating a project from scratch and step by step. 
This project must not be considered as a base line from other developments that will turn into application runing on productive environtments.
![alt text for screen readers](https://www.2code.com.mx/static/media/1-sheel-angular.png)

### 1) Init Node.js project

> npm init

### 2) Init typescript project

> tsc --init 

### 3) Create an angular.json file

> touch angular.json

### 4) Add node dependencies and define scripts 

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

### 5) Install dependencies

> npm i 


### 6) Create the next first file structure for Application Bootstrapping

    src
    |-- index.html
    |-- styles.css
    |-- main.ts

### 7) Add to angular.json next lines for Application bootstrapping

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

### 8) Add to tsconfig.app.json with the below content

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

### 9) Test the application bootstrapping

> ng serve

The output must be as shown below

    √ Compiled successfully.
    ✔ Browser application bundle generation complete.

    Initial Chunk Files | Names   | Raw Size
    runtime.js          | runtime |  6.53 kB |

    4 unchanged chunks

    Build at: 2023-03-03T18:56:34.932Z - Hash: c8d6fea0c9e7478f - Time: 76ms

    √ Compiled successfully.

