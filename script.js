// let sliders = document.querySelectorAll('.slide');
let carousel = document.querySelector('.caraousel');
let slideIndex = 0;
let sliders = []

const createSlide = () => {
    if (slideIndex >= events.length) {
        slideIndex = 0;
    }

    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(events[slideIndex].name));
    p.appendChild(document.createTextNode(events[slideIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide)

    imgElement.src = events[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "event-title";
    p.className = "event-desc";

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }
}

for(let i= 0; i < 6; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nextBtns = document.querySelectorAll(".post-btn");

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nextBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth + 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});


// const videoCards = [...document.querySelectorAll(".video-card")];

// videoCards.forEach(item =>{
//     item.addEventListener("click", ()=>{
//         let video = item.children[1];
//         video.play();
//     })
//     item.addEventListener("mouseleave", ()=>{
//         let video = item.children[1];
//         video.pause();
//     })
// })

const videoCards = document.querySelectorAll(".card-video")
for(let i = 0; i < videoCards.length; i++){
    videoCards[i].addEventListener("mouseenter", function(e){
        videoCards[i].play()
    })

    videoCards[i].addEventListener("mouseout", function(e){
        videoCards[i].pause()
    })
}

// Array of event objects


// Function to create and append event cards
// function RecentPictures() {
//     const container = document.getElementById("card-container");

//     recents.forEach(recent => {
//         // Create card div
//         const card = document.createElement("div");
//         card.className = "card";

//         // Create image element
//         const img = document.createElement("img");
//         img.src = recent.image;
//         img.alt = recent.name;
//         img.className = "card-image";

//         // Create card body
//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";

//         // Create name element
//         const name = document.createElement("h2");
//         name.className = "name";
//         name.textContent = recent.name;

//         // Create description element
//         const desc = document.createElement("h6");
//         desc.className = "desc";
//         desc.textContent = recent.desc;

//         // Create button element
//         const button = document.createElement("button");
//         button.className = "view-btn";

//         const link = document.createElement("a");
//         link.href = recent.image;
//         link.textContent = "Download Image";
//         link.download = ""; // Allows direct download
//         button.appendChild(link);

//         // Append elements to card body
//         cardBody.appendChild(name);
//         cardBody.appendChild(desc);
//         cardBody.appendChild(button);

//         // Append image and card body to card
//         card.appendChild(img);
//         card.appendChild(cardBody);

//         // Append card to container
//         container.appendChild(card);
//     });
// }

// RecentPictures()

const sectionsContainer = document.getElementById("sections-container");

sectionsData.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = section.title;

    const sliderWrapper = document.createElement("div");
    sliderWrapper.className = "slider-wrapper";

    const preBtn = document.createElement("button");
    preBtn.className = "pre-btn";
    preBtn.innerHTML = `<img src="Data/pre-btn.png" alt="Scroll Left">`;

    const postBtn = document.createElement("button");
    postBtn.className = "post-btn";
    postBtn.innerHTML = `<img src="Data/post-btn.png" alt="Scroll Right">`;

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    section.events.forEach((event) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "card-image";
        img.src = event.image;
        img.alt = event.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const name = document.createElement("h2");
        name.className = "name";
        name.textContent = event.name;

        const desc = document.createElement("h6");
        desc.className = "desc";
        desc.textContent = event.desc;

        const buttons = document.createElement("div");
        buttons.className = "btns";

        const downloadButton = document.createElement("button");
        downloadButton.className = "download-btn";

        const downloadLink = document.createElement("a");
        downloadLink.href = event.image;
        downloadLink.textContent = "Download";
        downloadLink.download = event.name; // Suggest a filename for download
        downloadButton.appendChild(downloadLink);

        const viewButton = document.createElement("button");
        viewButton.className = "view-btn";
        viewButton.textContent = "View";

        buttons.appendChild(downloadButton);
        buttons.appendChild(viewButton);

        cardBody.appendChild(name);
        cardBody.appendChild(desc);
        cardBody.appendChild(buttons);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardContainer.appendChild(card);
    });

    preBtn.addEventListener("click", () => {
        cardContainer.scrollLeft -= cardContainer.offsetWidth;
    });

    postBtn.addEventListener("click", () => {
        cardContainer.scrollLeft += cardContainer.offsetWidth;
    });

    sliderWrapper.appendChild(preBtn);
    sliderWrapper.appendChild(cardContainer);
    sliderWrapper.appendChild(postBtn);

    sectionDiv.appendChild(sectionTitle);
    sectionDiv.appendChild(sliderWrapper);

    sectionsContainer.appendChild(sectionDiv);
});

// Modal functionality
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.style.display = 'none';

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

const modalImage = document.createElement('img');
modalImage.className = 'modal-image';

const closeModal = document.createElement('span');
closeModal.className = 'close-modal';
closeModal.textContent = '×';

modalContent.appendChild(modalImage);
modalContent.appendChild(closeModal);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Open modal and set image
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-btn')) {
        const card = event.target.closest('.card');
        const imageSrc = card.querySelector('.card-image').src;

        // Preload the image to get natural dimensions
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            modalImage.src = img.src;
            modal.style.display = 'flex';
        };
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Optional: Close modal on outside click
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
