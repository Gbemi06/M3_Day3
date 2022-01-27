window.onload = (band) => {
  fetch(`https://api.pexels.com/v1/search?query=${band}`, {
    headers: {
      Authorization: "563492ad6f91700001000001d73ed4a7e8f34205987bdd1ecd5d4040",
    },
  })
    .then((response) => response.json())
    .then((loadData) => {
      console.log(loadData);
    });
};
/*let imageData = document.querySelector(".image_content");

      for (let i = 0; i < loadData.photos.length; i++) {
        const image = loadData.photos[i];
        console.log(image);

        const theData = document.createElement("div");
        theData.classList.add("col-md-4");

        theData.innerHTML = `
              <div class="card mb-4 shadow-sm">
            
                  
                
                <img class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225" src="${image.src.medium}" alt="">
                  
                
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            
`;
        console.log(theData);
        imageData.appendChild(theData);
      }
    });
};

const changeImage = () => {
  loadPage("your-query");
};

const changeImage1 = () => {
  loadPage("your-secondary-query");
};*/
