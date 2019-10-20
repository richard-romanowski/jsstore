# js store


This project is based on 
https://github.com/tobi-or-not-tobi/cxlive/tree/master

with up-to-date Spartacus library (10/12/3019)
"@spartacus/storefront": "^1.1.0"
used "@spartacus/storefront@1.2.2"

Demo 1
Initial - connection to remote SAP server, working version.

code https://stackblitz.com/github/richard-romanowski/jsstore/tree/initial

Demo 2
Runtime Theming - use variables for color.
code https://stackblitz.com/github/richard-romanowski/jsstore/tree/runtime-theming

Demo 3
Custom Search - Replace component
Use outlets to replace/add custom voice search component
code https://stackblitz.com/github/richard-romanowski/jsstore/tree/custom-search


Demo 4: Override and leverage ctx data
This demonstrates a PDP price and summary outlet that uses the data provided from the context. This example differs from original as IMAGE is not part of ProductDetailOutlets.  

Introduce type-safe outlet references (ProductDetailOutlets or ProductDetailsComponent.outlets)
There are some issues with this demo: ProductDetailOutlets is the only declared outlets,  ProductDetailsComponent dosn't exist, and ProductImagesComponent is not exported. 

code https://stackblitz.com/github/richard-romanowski/jsstore/tree/outlet-with-context

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
