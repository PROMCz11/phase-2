// Getting the grid container
const animatedGrid = document.querySelector('.animated-grid');

// Setting up the box count
const boxNumber = 479;
// Instead of CPU-heavy DOM manipulation every time we add a box, I compiled the boxes HTML into one string variable, this way we only manipulate the DOM once
let boxesHTML;
for (let i = 0; i < boxNumber; i++) {
    boxesHTML += '<div class="box"></div>';
}
animatedGrid.innerHTML += boxesHTML;

// Animating the box grid
const minDelay = 0;
const maxDelay = 5000;
const animatedGridBoxes = document.querySelectorAll('.animated-grid .box');
animatedGridBoxes.forEach(box => {
    box.classList.toggle('glow');
    const classAssignmentDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    box.style.animationDelay = `${classAssignmentDelay}ms`;
    const selectedColor = Math.floor(Math.random() * 16) + 1;
    setTimeout(() => {
        if(selectedColor === 1 || selectedColor === 2) {
            box.classList.add('glow-blue');
        }
        else if(selectedColor === 3 || selectedColor === 4) {
            box.classList.add('glow-green');
        }
        else if(selectedColor === 5 || selectedColor === 6) {
            box.classList.add('glow-orange');
        }
        else if(selectedColor === 7) {
            box.classList.add('glow-red');
        }
    }, classAssignmentDelay);
});

// Adding the FAQ functionality
const questions = document.querySelector('.questions');

questions.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains("question")) {
        target.querySelector(".question").classList.toggle("expanded-question");
    }
    else if(target.parentElement.classList.contains("question")) {
        target.parentElement.classList.toggle("expanded-question")
    }
    else if(target.parentElement.parentElement.parentElement.classList.contains("question")) {
        target.parentElement.parentElement.parentElement.classList.toggle("expanded-question")
    }
    else if(target.classList.contains("accordion-arrow-down")) {
        target.parentElement.parentElement.classList.toggle("expanded-question");
    }
})

// Fixing the </main> padding to be equal to the height of the navbar
const navBar = document.querySelector(".nav-bar");
const main = document.querySelector("main");
main.style.paddingTop = `${navBar.offsetHeight}px`;

// Fixing the footer's height (TO BE DELETED -- maybe)
// const footer = document.querySelector("footer");
// footer.style.height = `${navBar.offsetHeight}px`;

// Making the nav logo clickable and redirects to the home page
const navBarLogo = document.querySelector('.main-logo');

navBarLogo.addEventListener('click', () => {
    window.location.href = "index.html";
});

// Adding the copy to clipboard functionality in the last-cta-parents section
if(document.querySelector("body").classList.contains("parents")) {
    const clipboardBtn = document.getElementById("clipboard-btn");
    clipboardBtn.addEventListener("click", () => {
        // const clipboardText = document.getElementById("clipboard-text");
        
    
        // Select the text
        // clipboardText.select();
        // clipboardText.setSelectionRange(0, 99999); // For mobile devices
        // Deicded not to select the text to prevent the keyboard from showing up on mobile
    
        // Copy
        // navigator.clipboard.writeText(clipboardText.value); This was changed because we don't want it to copy the value, in case someone tried to change the textbox input, we have to keep it consistent, instead, it was set to copy the link from the html of the button above
    
        // Copy the html href link from the button above
        navigator.clipboard.writeText(document.querySelector(".last-cta-parents > a").href);
    
        alert("تم نسخ رابط التحميل، يمكنك الآن مشاركته مع من تريد");
    });
}