//n'oubliez pas de chnger l'URL entre les parenthèses
fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       //ici vous ecrivez votre code
        for (const key in data) {
            console.log(key);
                 }
         //  début de la section avantages-client         
         let avantages= document.getElementById("sec1-avantages-clients");
         data.avantagesClients.forEach(element => {
           
            let paragraphe1 =document.createElement("p");
            paragraphe1.textContent = element;
            avantages.appendChild(paragraphe1);

            // essaie ici
            
             //  fin de la section avantages-client

        });


        //  début de la section activité 
        let sec2 = document.getElementById("sec2-activités") //pour la prémière section (avantages-clients)
        data.activites.forEach(element => 
            {
            let div=document.createElement("div");    //pour créer une div
            sec2.appendChild(div);
            console.log(element);

            let image =document.createElement("img");     //créer l'img
            div.appendChild(image);
            image.src=element["image-url"];  //à revoir

            let para =document.createElement("p");
            para.textContent = element.description;
            div.appendChild(para);}); 
            //fin de la section avantages   
        
        
            // début de la section témoignages 

        let sec3 =document.getElementById("sec3-témoignages");
        data.temoignages.forEach(element => {           
      

        let div = document.createElement("div");    //créer une div
        sec3.appendChild(div);
        // console.log(element);
        let h3 =document.createElement("h3");     //créer le h3 pour prénom
        div.appendChild(h3);
        h3.textContent = element.prenom;

        let h4 =document.createElement("h4"); //créer le h4 pour l'expérience 
        div.appendChild(h4);
        h4.textContent = element.typeExperience;

        let par =document.createElement("p");  //créer un paragraphe
        div.appendChild(par);
        par.textContent = element.commentaire;  //Ajouter un texte en le paragraphe 

        let note =document.createElement("h4"); //pour la note 
        div.appendChild(note);
        note.textContent = element.note;

        //fin de la section témoignage 

    });

    
    });   
        
        
        
        


             
            



            
            // div.appendChild(img);
            // img.src=element.imageURL;
            
                     // une deuxieme div avec à l'interieur un h2 (en contenu textuel le name),
                     //la reponse ci-dessous est juste, fait et vérifié par Jessica !
                    // let divvv = document.createElement("div");
                    // div.appendChild(divvv);   // <--div c'est le parent de divvv, d'ou cette écriture.
        
                    // let h2 =document.createElement("h2");
                    // divvv.appendChild(h2);
                    // // un paragraphe  (en contenu textuel la description) et un lien (en contenu textuel le githubLink)            
                    // //suite   
                    // let p =document.createElement("p");
                    // p.textContent =element.description;
                    // divvv.appendChild(p);
        
                    // let a =document.createElement("a");
                    // a.href=element.githubLink;
                    // a.textContent="Hey yo !";
                    // divvv.appendChild(a);












       
    // })
    // .catch(error => console.error('Error:', error));











    // début ci-dessous //////////////////////////////////////////////////////////////////////



// delete object.maison   //pour supprimer un élement (maison par exemple)
//console.log(object.age);
// console.log(object); 
// console.log(object.adresse.rue); 
// function personne(...,...) {
    
// }

// pour faire une boucle for in,

// for( let propriete in object){
//     console.log(propriete+":"+object[propriete]);  
// }





// for (variable in objet) {
//     instructions;
    // voiture.options.forEach(element=> {
    // let ul=document.getElementById("unlisted");
    // letli=document.createElement("li");
    // li.textcont=element;
    // ul.appendChild.li;
    //    });

    //Object voiture, boucle, créer un paragraphe par element
    // et créer un contenu textuel un par element, voiture, ...

  
    // for (let voiture in voiture) {
            // if (voiture.prototype.hasOwnProperty.call("para", voiture)) {
            // const element = voiture[options]; 
            // console.log(voiture.options);             
            //     }
            // }




// for (let key in voiture) {
//     console.log(key);
//     let texte = createElement("p");
//     let keyValue = voiture[key];
//     texte.textContent = keyValue;
//     document.body.appendChild(texte);}




//     let div=document.getElementById("")
//     for (const key in voiture{
//         let p=document.createElement("p")
//     });

    

// L'EXERCICE COMMENCE ICI
// let data = {
//     "projects": [

//         {   "name": "Weather App",
//             "description": "A simple app to display weather information.",
//             "githubLink": "https://github.com/username/weather-app",
//             "imageURL": "https://via.placeholder.com/300x200?text=Weather+App"
//         },
//         {
//             "name": "Task Manager",
//             "description": "Manage your daily tasks efficiently.",
//             "githubLink": "https://github.com/username/task-manager",
//             "imageURL": "https://via.placeholder.com/300x200?text=Task+Manager"
//         },
//         {
//             "name": "Portfolio Website",
//             "description": "A personal portfolio to showcase projects.",
//             "githubLink": "https://github.com/username/portfolio-website",
//             "imageURL": "https://via.placeholder.com/300x200?text=Portfolio+Website"
//         }
//     ]
// }

// console.log(data.projects[0].name);


// for (let key in data) {
// let texte=createElement("div");
// let keyValue=data[key];
// texteContent=keyValue;
// document.body.appendChild[2];   
// }
//     console.log(data);


// correction de l'exercice ci-dessous 
// Utiliser l'objet data pour créer: /
// une div et lui ajouter la class : project-card /
//    const projectsContainer=document.getElementById("projects-container");
//    data.projects.forEach(element => {
//     const div=document.createElement("div")
//     div.className="projects-card";
//     projectsContainer.appendChild(div);
//     // Suite de la correction ci-dessous
//     // Cette div devra contenir une image qui prendra comme source l'imageURL, 
//     let img = document.createElement("img");
//     div.appendChild(img);
//     img.src=element.imageURL;
    
             // une deuxieme div avec à l'interieur un h2 (en contenu textuel le name),
             //la reponse ci-dessous est juste, fait et vérifié par Jessica !
            // let divvv = document.createElement("div");
            // div.appendChild(divvv);   // <--div c'est le parent de divvv, d'ou cette écriture.

            // let h2 =document.createElement("h2");
            // divvv.appendChild(h2);
            // un paragraphe  (en contenu textuel la description) et un lien (en contenu textuel le githubLink)            
            //suite   
        //     let p =document.createElement("p");
        //     p.textContent =element.description;
        //     divvv.appendChild(p);

        //     let a =document.createElement("a");
        //     a.href=element.githubLink;
        //     a.textContent="Hey yo !";
        //     divvv.appendChild(a);
        // });
        


// à connaitre data.projects[0].imageURL  

// pour faire une boucle il nous faut utiliser array.forEach(element => {    
// });



// array.forEach(element => {
// }); pour faire des navigations dans toute la boucle 

//  après createelement, c'est appendchild, à gauche on a le parent et à droite on aura l'enfant 

//pour rajouter une id à div en js, il faut faire div.className="nom de l'id" (autre chose: div.stylecolor= vous mettez la couleur souhaitée)

    
// fetch :permet de lire un fichier   .then permet de 


// fetch(";;;")
// .then(response=> { //écrire son code à l'intérieur de 
//     if
// });


