import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureUpdateElement = document.getElementById("picture-update-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");
const pictureUpdateButtonElement = document.getElementById("picture-update-button");
let updateModal = document.getElementById("Update");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");
const getUpdateContents = () => pictureUpdateElement.value;
const clearUpdateContents = () => (pictureUpdateElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();
  add(url);

  // eslint-disable-next-line no-use-before-define
  refreshGrid();
  clearInputContents();
};

const updatePictureHandler = (i) => {
  const url = getUpdateContents();
  update(i, url);

  updateModal.style.display = "none";
  // eslint-disable-next-line no-use-before-define
  refreshGrid();
  clearUpdateContents();
};

const refreshGrid = () => {
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");
    imgElement.src = i.data;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });

    const launchModal = clone.querySelector(
        ".picture-item-modal-button"
    );

    launchModal.addEventListener("click", () => {
      // Display the modal
      updateModal.style.display = "block";

      // Close button
      let closeIcon = document.getElementsByClassName("close")[0];
      closeIcon.onclick = function() {
        updateModal.style.display = "none";
        clearUpdateContents();
      };

      // Update button
      pictureUpdateButtonElement.addEventListener("click", () => updatePictureHandler(i));
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());