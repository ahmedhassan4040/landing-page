/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/** Section Class to add Html Section */
class CreateSection {

     SectionId = 0;

    /** Add Html Section Content */
    get AddHtmlContent() {
        return `
       <section id="section${this.SectionId}"  data-nav="Section ${this.SectionId}" >
       <div class="landing__container">
          <h2>Section ${this.SectionId}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
          
          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
          </div>
          </section>
          `
    };

    /** Add New Section To Page */
    NewSection() {
        this.SectionId += 1;
        document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', this.AddHtmlContent);
    }

}//End Class

/** Navbar Class */
class NavbarMenu {
    /** Menu Elemnt Selected By Id */
    menuElement = document.getElementById('navbar__list');

    /** Build Menu  */
    NewMenu() {
        //Clear Menu From "li" Elements
        this.menuElement.innerHTML = '';
        document.querySelectorAll('section').forEach(element => {
            this.menuElement.insertAdjacentHTML('beforeend', `<li><a class="menu__link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>`);
        });
        this.goToSection();
    }

    /** Go To Section */
    goToSection() {
        this.menuElement.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
            addActiveClass(event.target.dataset.sectionId)
        });
    }



}//End Class

/**
 * Define Global Variables
 * 
*/
const section = new CreateSection();
const menu = new NavbarMenu();
const goToTopElement = document.getElementById('scrollTop');
const TopofPage = document.getElementById("to-top");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/** Add New Section */
function NewSection() {
    section.NewSection();
    menu.NewMenu();
}


/** GoToTop Function */


/** 
 * Function For Chek What Is Sextion On Screen Now
 */
function isSectionOnScreen(element, buffer) {
    buffer = typeof buffer === 'undefined' ? 0 : buffer;
    // Get element's position in the viewport
    const bounding = element.getBoundingClientRect();

    // Check if element is in the viewport 
    if (bounding.top >= buffer && bounding.left >= buffer && bounding.right <=
        // fallback for browser compatibility 
        ((window.innerWidth || document.documentElement.clientWidth) - buffer) &&
        bounding.bottom <=
        ((window.innerHeight || document.documentElement.clientHeight) - buffer)) {
        return true
    } else {
        return false;
    }
}

/** Add active Class */
function addActiveClass(id){
    //Add Link Active
    document.querySelector('.link__active')?.classList.remove('link__active');
    document.querySelector(`[href="#${id}"]`).classList.add('link__active');

    //Add Section Active
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');
    document.querySelector(`#${id}`).classList.add('your-active-class');

    //Update Locatoin Hash
        setTimeout( () => {
        window.location.hash = id 
    }, 0);
}

window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}


TopofPage.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });

let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


section.NewSection();
section.NewSection();
section.NewSection();
menu.NewMenu();
