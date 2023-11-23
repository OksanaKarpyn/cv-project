// typed script

const typed = new Typed('.typing',{
    strings:[ "","Web Devoper","Front-End Developer","Full Stack Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
});
// ==============================Aside==================
// const nav = document.querySelector('.nav'),
//       navlist = nav.document.querySelectorAll('li');
//       totalNavList = navlist.length;

const navList = document.querySelectorAll('.nav li a');
// let listLength = navList.length;
for(let i = 0; i < navList.length; i++){
    console.log(navList[i]);
    const listItem = navList[i] 
    // listItem.classList.remove('active')
    listItem.addEventListener('click',function(event){
        // event.preventDefault;
        navList.forEach(item => item.classList.remove('active'));
        if(!this.classList.contains('active')){
            this.classList.add('active');
            
        }else{

            this.classList.remove('active')
        }
          console.log(this);
          showSection(this);
    })
};
function showSection(p){
    const sectionId = p.getAttribute('href').substring(1);//.substring(1): Questo metodo viene utilizzato per ottenere una sottostringa dell'attributo href, iniziando dal secondo carattere (indice 1). Questo è fatto per rimuovere il carattere "#" che di solito precede gli ID nelle URL interne. Quindi, se l'href fosse "#home", dopo la chiamata di .substring(1) otterremmo solo "home".oppure split('#')[1];
    const section = document.getElementById(sectionId);
 const sections = document.querySelectorAll('.section')

 sections.forEach(item => item.classList.remove('active'));
    

        // section.classList.add(active);
        if(!section.classList.contains('active')){
            section.classList.add('active');
            
        }else{

            section.classList.remove('active')
        }
    
}
// home   section btn-------
const hireMe = document.querySelector('.hire-me');
const contactLink = document.querySelector('a[href="#contact"]');
hireMe.addEventListener('click',function(){
    const sections = document.querySelectorAll('.section');
    sections.forEach(item => item.classList.remove('active'));
    //ciclo for usiamo  per assicurarci che nessuna section abbia clase active  e pio lo asegnamo a quella che serve

    
    contactLink.classList.add('active');
})


// portfolio section btnn

const btnSite = document.querySelector('.btn-site');
const detailsPortfolioIcon = document.querySelector('.portfolio-item-details i');
const detailsPortfolio = document.querySelector('.portfolio-item-details');
btnSite.addEventListener('click',function(){
    if( detailsPortfolio .style.display = 'block'){
        this.style.display = 'none';
    }else{
        this.style.display = 'block';
    }
    // detailsPortfolio .style.display = 'block';
    
})

detailsPortfolioIcon.addEventListener('click', function(){
    detailsPortfolio.style.display = 'none';
    btnSite.style.display = 'block';
})