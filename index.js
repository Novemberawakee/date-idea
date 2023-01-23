const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");

btnOne.addEventListener('click', activeDate);
btnTwo.addEventListener('click', notActive);

function activeDate() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1476415408533-0b2c14cab93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
    text.textContent = "What's our budget?";
    btnOne.textContent = "$$";
    btnTwo.textContent = "$$$";

    btnOne.addEventListener('click', low);
    btnTwo.addEventListener('click', high);
}

function low() {
    image.setAttribute("src", "https://images.pexels.com/photos/5225319/pexels-photo-5225319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    text.textContent = "You can go for/to: roller skating, ice skating, bike ride, hiking, dance lesson, swimming, mini golf, bowling, trampoline park, water park";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function high() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1484248970913-02d5ad63477f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "You can go enjoy beautiful views from a helicopter ride or go for a trip to another city/coutry";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function notActive() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "Would you like a creative or educational date?";
    btnOne.textContent = "YES";
    btnTwo.textContent = "NO";

    btnOne.addEventListener('click', creative);
    btnTwo.addEventListener('click', notCreative);
}

function creative() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "You can buy two pairs of white shoes and castomize them for each other. You can take a cooking class. You can go to the museum. You make each other a photoshoot or record a short video clip. You can take a painting class.";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function notCreative() {
    image.setAttribute("src", "https://images.pexels.com/photos/2418920/pexels-photo-2418920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    text.textContent = "Would you like a cozy romantic date?";
    btnOne.textContent = "YES";
    btnTwo.textContent = "NO";

    btnOne.addEventListener('click', romantic);
    btnTwo.addEventListener('click', notRomantic);
}

function romantic() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1623944889288-cd147dbb517c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "You can go for a picnic. You can go to the cinema/ restaurant/ beach.";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}

function notRomantic() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.textContent = "Do you even want to go on a date?";
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
}