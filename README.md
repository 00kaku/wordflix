# A React application with Wordpress+Graphql backend that shows information about superhero movies.

A website that that shows information about various superhero movies.User from home page can go to browse movies page where they see a thumbnail and name of the movies in listing. On clickin any movie  tile user will be moved to details page where they can see a detailed tile of the superhero movie with release date and synopsis. The website is fully responsive and mobile first.

###### ReactJs is used for structure and webstie design.
###### Wordpress is used as a headless CMS for the backend of the app.
###### WPGraphQL plugin is used to create graphql end points in wordpress bank end.
###### Advanced custom field plugin is used to create a custom release date field for the movies.

#### Screenshots


#### How to use

1. Download all the code from the repo.
2. Run **npm install** in the folder to install the dependencies.
3. Create a local wordpress or have a running instance.
4. Change the **client uri** in **ApolloClient** in App.js with your wordpress site uri.
5. Install **ACF Plugin and WPGraphQL Plugin** from the wordpress admin.
6. Create a custom field in ACF plugin and name it **release_date**.
7. Copy the code from **graphql/add_custom_field_type_in_graphql_schema.txt** into your active theme's function.php.(This will your custom field in graphql schema)
8. Populate some posts and upload feature image for them.
9. Run with npm start.
