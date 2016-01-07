# Contributing
Use the following guidelines when contributing to this project.

# Workflow
Please follow the [Gitflow guidelines](http://danielkummer.github.io/git-flow-cheatsheet/). Specifically:
* Create a new feature branch from the `develop` branch
* Prefix your feature branch name with `/feature`
* When ready for review, create a pull request against the `develop` branch
 * **Important:** Get another RefugeeTech developer to review your pull request before merging

# Code quality
In a nutshell, **write code for humans to read and understand**. Our code will be minified for machines during the build process. For further reference, please [read Human JavaScript](http://read.humanjavascript.com/) by Henrik Joreteg.

## Comments
*Every* significant line of code should have an accompanying human language (English) comment. This is for several reasons:

* Comments act like a pair-programmer, explaining the code to other developers or your future self
* Comments may illuminate errors
  * logical errors where code is not doing what is expected
  * semantic errors where the code is not [literate](https://en.wikipedia.org/wiki/Literate_programming)

## One task per line
Each line of code should perform only one action. When chaining is important, each chained aciton should be placed on a new line.

## JavaScript semi-standard
Please follow the [JavaScript semi-standard coding style](https://github.com/Flet/semistandard).

## Variables
Use semantic variable names. Semantic variable names have the following traits:

* They succinctly describe what they represent
* Words are fully spelled out
* Variables with multiple words use camel case notation
* When used in subsequent lines of code, the variable name reads as close to a plain language sentence as possible

# File structure
This project is using a feature module organization pattern. Please use the following, or similar, file structture:

  * / (project root)
    * featureName/
      * collections/
        * collection.js
        * schema.js
        * permissions.js
      * client/
        * templateName/
          * templateName.html
          * templateName.js
         * routes/
          * routes.js 
      * server/
        * methods.js
        * publications.js

## Packages
The following packages are important components of the RefugeeTech Platform.

### Mockup data
[Anti Fake](https://github.com/anticoders/meteor-fake/) is used to generate fake/example data.


### Routing
[Flow Router](https://github.com/kadirahq/flow-router) is used for project routing.

### Schema
[Simple Schema](https://github.com/aldeed/meteor-simple-schema) is used to create schemas for our database collections.

### Templating
[Blaze](https://meteor.github.io/blaze/) is the templating language used in our project packages.
