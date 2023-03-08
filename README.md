# Hay-Noche

### The ultimate guide to your perfect night out ~


---
## Description

We created this MVP for our final project at Holberton School Uruguay.

`Hay Noche` is a fullstack application which vision seeks to revolutionize the way we can access to our city's culture. By using our automated process of web scraping we keep up to date with the best cultural events out there.

---
## Technologies & Versions

### Backend Development

> **Language:** Java 

>  **Web Framework:** Spring Boot

> **Object-Relational Mapping (ORM):** Hibernate / JPA

> **API Framework:** Spring MVC

### Frontend Development

> **Programming Language:** Javascript / Html / CSS

> **Web Framework:** React

### Databases implementation

> **Format** - Relational Databases
> 
> **Lengauge:** MySQL
> 
> **Using `localhost`** - MySQLWorkbench + Postman
> 
> **Using `AWS`** - MySQLWorkbench + Postman + local terminal

### Web Scraping

> **Library:** Selenium

> **Language:** Python

> **Other tools:** wget


## File Description

- `Development Phase:`
> #### Backend
> - **HayNoche-Backend_v1:** This was our first version with functionalities for "BarRes" & "Promociones" and both being entities and tables are created based on their attributes.
>
> 
> - **HayNoche-Backend_v1.1:** Same functionalities as the one before but we handled some attributes with the use of `enum`.
>
>
> - **HayNoche-Backend_v1.2:** Same functionalities, but here we added yet more attributes, relations and handled better the connections between the backend to the local database or AWS RDS plus the access from our frontend to our app.
>
> 
> - **HayNoche-Backend_v2.0 [Sweet Berry]:** This is the latest version of our backend application, here added the "Teatro" entity and it's functionalities

> #### Frontend
> - **Hay-Noche_Fullstack_v1 :** This was the first version of our frontend application, a skeleton of what we wanted the app to look and function.
>
> 
> - **Hay-Noche_Fullstack_v1 test:** Same look of the application but with connections to our backend app in order to populate the frontend with data from our databases.
>
> 
> - **HayNoche-Fullstack_v1.1 [Hot Body]:** This was our second version, with a more organized structure, folders are handled in order to mantain a clean look. Very rough draft of what the app actually should look like.
>
> 
> - **HayNoche-Fullstack_v1.2 [Cherry Bloom]:** This version can populate it's components with our databases tables by the usage of axios. Axios allows the frontend to contact and read all the data stored in AWS RDS through our backend API (or localhost for development matters). App is currently under plastic surgery and it is looking quite good.

- `MVP`
> #### Backend
> - **HayNoche-Backend_v2.2 [Acid Rain]:** In our latest version "Musica" was added, with it's respective repository, service, service implementation and all of previous properties as seen in "BarRes" and "Teatros". It also has corresponding ports in order for the frontend to access it.

> #### Frontend
> - **HayNoche-Fullstack_v1.3 [Classical Lemon Fresh]:** Version was updated regarding CSS and aiming to improve user experience. Populated directly from our db in AWS RDS.

> #### Web Scraping
> **Instagram_Bot:** Script automates the process of downloading posts pictures from Instagram accounts. It is capable of accessing an account, navigating to a specific profile, and downloading all, or a specified number of, posts pictures.
> 
> **TickAntel_Bot:** Script is used to web scrape from the webpage TickAntel, with the goal of acquiring all the theater's flyers. Images are then saved to the local directory of our choice.
----

## License
`Hay Noche` was created for the sole puropose of growing from noobies to professionals. Though, we are looking forward to make this idea come truly alive.

----

## Authors

[Denisse Landau](https://www.linkedin.com/in/denisselandau/) |
Project Manager & Fullstack Developer & DevOps

[Alejandro Montenegro](https://www.linkedin.com/in/alejandro-montenegro-505233184/) | Backend Developer **heavy** & Fullstack Developer 


[Santiago Rodriguez](https://www.linkedin.com/in/santiago-rodriguez-a1901b246/) | Data Scientist & Web Scraper

[Romina Guimaraens](https://www.linkedin.com/in/romina-guimaraens-465992238/) | Frontend Developer & UI-UX Design
