# Angular 13.3 with NgRX proof of concept  

### Technologies used:  
I have used Angular 13.3 with NgRX to focus the exercice in a push based development strategy to show which could be the approach in a larger project in order to keep it maintainable and scalable when it grows.  
  

# Steps

The development process and options are described at each point in the following list. In any of them you will find some observations or improvements that I would like to apply in case this project grows.
1. [Project structure](#project-structure)  
1.1 [Features](#features)
1.2 [Shared](#shared)
1.3 [Shell](#shell)
1.4 [Assets](#assets)
1.5 [Styles](#styles)
2. [Technical process](#technical-process)
 2.1 [Fetch data](#fetch-data)
 2.2 [Add NgRX](#add-the-store)
 2.3 [Add the façade](#add-the-facade)
 2.4 [Go to the detail](#go-to-the-detail)
 2.5 [Angular Material Theming](#angular-material)
 2.6 [Create layout type util](#layout-type-util)
 2.7 [Infinite scroll](#infinite-scroll)
 2.8 [Filter query](#filter-query)
 2.9 [Handle error](#handle-error)
 2.10 [Other topics](#other-topics)
 

## 1. Project structure
The first has been define the project organization. I have created a monolite Angular project with the following folders *structure**:  


### 1.1. Features
Here we would place all the features of the app. Until this moment we have created only one feature, composed for two views, sharing the module per feature, but when the app grows, here we should divide the by directories. Any feature includes its model, store (actions, effects, reducer and selector), views, facade, module and service. 

>***Improvements***: *Ideally, any features should be a lib than should be displayed for the app in a Monorepo NX with Domain Driven Design approach with a domain routing module than, at the same time, should be added to the app routing module. In that case, we would be able to keep the app clean and improve the performance with lazy loading.*

### 1.2. Shared
Here I have added all shared own components, definitions, utils and pipes. Any source we would need to use globally should be added in the shared folder in this project.
	
>***Improvements***: *Ideally, all shared sources should be also a lib in a Monorepo NX. It would be reusable by differnt apps, or business domains and also allows to keep the app clean and faster. Just pay per load. This approach matches better with micro forn ends srtategy too.*

### 1.3.  Shell
This is the basis skeleton of the application. I pose it to separate the app wrapper from the logical global imports in app module. All app's have navbars, sidenabs, main contents or footer. I treat these components from the shell layer as a dummy wrappers, just to define the areas and them responsive behaviour.

>***Improvements***: *We could use BreakPonintObserver, than is the reactive way to manage the standard breackpoints of the applications and encapsulate the differences in modifier scss classes following using BEM Methodology to encapsulate the specifications.*
	 
### 1.4. Assets
Here I have placed the static sources I have needed as images, fonts. This is the place for any static source.
>**Improvements**_: *This should be splited in two in the ideal world of the monorepo with DDD.  One could still keep in the app, for a directory i18n for the locales or some others for the api or config. The rest of assets as shared images, icons or fonts, would be in a shared lib and load any source when its needed, in orther to improve the performance of the application.*

### 1.5. Styles
I have created an own directory for styles because in large scale applications them have pretty much entity to treat them separated.

The UI Architecture proposed is based on ITCSS with BEM methodology and separation of concerns with OOCSS pattern in order to address styles with px perfect quality in a large-scale application in a consistent way. It is also inspired in 7-1 from Sass where we deacoplate the styles file from the views. 

The applications are composed by layout types (structure) and UI components (skin).

Them may have lots of different screens but if we do a previous diagonal reading of their designs, we allways can find common structural behaviours than we can group in a few files. Layout are the responsible of the structural behaviuour. From the components to outside. We use BEM to group the common behaviours in a generic files, like _lab-layout.scss, and we add the specifications in the modifier files as _lab-02-a-layout-main__vertically-top.scss. The name of the file describes the ubication and the behaviour as a modifier.

Likewise, the components will define their own styles (From them to inside), either own or from a UI kit. 

In the components directory, I have added one file per UI component.

In the vendors directory, I have added one file per angular material used.

The purpose is to avoid write one file per view in the app and write a lot of scss classes in any component or html tag.  

It would be a focusal solution but could cause issues and small differences in the implementantion details when the app grows. It would be difficult to maintain too.  

## 2. Technical process
### 2.1. Fetch data from the list and display it to the template
I have tried to do it **KISS**, creating a simple service to get the list of items and display them to the template. Since the first moment I have used the trackBy id to let the directive ngFor to iterate just on the modificated fields. In this first step, I've just used the get data list url. 
### 2.2. Add the store
After that I have created all the NgRX structure, called store. I have decided use a state management approach because it can be a more maintanible, scalable and easier to test. 

In the new generations of the applications, where the users are miles or milions submitting events, use a push based development strategy is the only possible way to take care on the performance and applications load, and Redux pattern get it easier. 

Also we are able to apply a right separation of concerns by this way.

There are many ways to to implement NgRX, but I have created a store with a actions, effects, reducer and selectors file. 

The Actions define ande create the actions of the app.
The Effects is the part responsible to request data to the service and send the action.
The Reducer changes the state of the aplication and catch inside it because they are pure functions.
The selectors pass the new state to the facade, that at the same time, dispatches the new state from the actions, closing the circle.

### 2.3. Add the facade
On the other hand I have decided to create a facade to abstract the state complexity of the views. 

By this way you can keep a clean API.

At the begining I have created there an observable method to get the list of beers from the state management and I have modified the method in the onInit of the template, to display the items from the facade instead of from the service directly.

After that, I have consulted in the API documentation how could I configure the end I have created the observable methods to get Beers by name, and by details. 

### 2.4. Go to the detail

First I have added the the params id in the app routing module. Then I have created a function to go to the detail passing the id as a param and I have used the Router from Angular concatening the id to the beers from the end point. 

Then I have shown the detail with a Angular Material Card. 

### 2.5. Angular Material: Combine UI own components & UI Kit ones
I belive a good approach is take advantadge form an external UI Kit, developed to be used in thousands of projects, well tested, customizable and fitable with Angular since is created by the same people. 

We don't want to rewrite the rules.

That's why I have decided to display the list and the details fisrt with the Material Card Component or I have used all Material Form Fields. 

To style them I apply the UI architecture described and in the vendors folder, I overwrite all the styles of these components, any one to each file. We can overwrite the styles without use importants nesting them in the layout tyle classes.

To display them I have finally decided to create an own UI card component, because the effort to custom the Material ones was too big than creating an own one.

To do that in a solid way, I have created all the root style guide variables and customized the Angular Material Theming following the Material Colors theory and I have aligned the naming way with the own root style guide variables.
### 2.6. Create layout type util:
The layout type thinking described is based in a previous analysis we need to encapsulate all the views, so all the ui components combinations with a layout type class. 

Use them as a magic string could cause errors because they are too long with all BEM modifiers. To prevent them I have created a util in the shared folder, to save these combinations in an enum. In this enum, I have also added the bonus of the feature class name. With that class, we would be able to encaspulate some possible modifications in a special view if the designs wont be well parametrized.
### 2.7. Infinite scroll:
I have insttalled the ngx infinit scroll lib, I've setted the params in a section in the list and created the events on scroll passing these params.

After that I have reviewed the API documentation and I have used the endpoint with the params pages and items per page.

I have developed the functionality modifying the request in the service and passing these two params to request method.

Finally I have created an enum in order to do these kind of units reusables.
### 2.8. Filter query:
In this step, the query should filter the data fetched in the browser. It was not a request to the API and that's why I have filtered by the item.name introduced in the search bar.

I have used the selectors to return the new state and show it to the view. 
I have added a comprovation, asking tf the query was not empty. In that case, we display the whole beers list. If not, we return just the matches results in a reactive way with the valueChanges from Angular forms.

I have created a dummy and reusable component where I have emmit an event and done the unsubscribe to aviod memory leacks. 
>**Improvements**_: *This search is not scalabe. One possible performance improvement wold be acces to it in a dictionary mode with a Map, key : value instead of iterate the array.*

### 2.9. Handle error
This is the last step I have been able to develop in this test. I have also added the error in the NgRX circuit but in the ideal way we should create an interceptor to manage the Http responses, API responses...

### 2.10. Other topics
As a details, I would like to explain that I have used a pipe sanitizer to remove strange chars.
I have added Angular routing animations.
>**Improvements**_: *I would like to add a guard to protect the child routs from the list.*
