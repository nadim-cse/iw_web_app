// ===== create new modal
const manageFolderModal = document.querySelector('.createFolderModal')

// openFolderModal for create new
function openFolderModal() {
  manageFolderModal.classList.remove('hidden')
}
openFolderModal()
// closeModal for create new
function closeFolderModal() {
  manageFolderModal.classList.add('hidden')
}
closeFolderModal()

window.onclick = function (event) {
  if (event.target === manageFolderModal) {
    manageFolderModal.classList.add('hidden')
  }
}

// ===== create new item modal
const manageItemModal = document.querySelector('.createItemModal')

// openItemModal for create new
function openItemModal() {
  manageItemModal.classList.remove('hidden')
}
openItemModal()
// closeItemModal for create new
function closeItemModal() {
  manageItemModal.classList.add('hidden')
}
closeItemModal()

window.onclick = function (event) {
  if (event.target === manageItemModal) {
    manageItemModal.classList.add('hidden')
  }
}
// ===== create new item modal
const manageItemImportModal = document.querySelector('.itemImport')

// openItemModal for create new
function openItemImportModal() {
  manageItemImportModal.classList.remove('hidden')
}
openItemImportModal()
// closeItemModal for create new
function closeItemImportModal() {
  manageItemImportModal.classList.add('hidden')
}
closeItemImportModal()

window.onclick = function (event) {
  if (event.target === manageItemImportModal) {
    manageItemImportModal.classList.add('hidden')
  }
}
// ===== create new item modal
const manageItemExportModal = document.querySelector('.itemExport')

// openItemModal for create new
function openItemExportModal() {
  manageItemExportModal.classList.remove('hidden')
}
openItemExportModal()
// closeItemModal for create new
function closeItemExportModal() {
  manageItemExportModal.classList.add('hidden')
}
closeItemExportModal()

window.onclick = function (event) {
  if (event.target === manageItemExportModal) {
    manageItemExportModal.classList.add('hidden')
  }
}

// ===== create new item modal
const manageCategoryModal = document.querySelector('.createCategory')

// openItemModal for create new
function openCategoryModal() {
  manageCategoryModal.classList.remove('hidden')
}
openCategoryModal()
// closeItemModal for create new
function closeCategoryModal() {
  manageCategoryModal.classList.add('hidden')
}
closeCategoryModal()

window.onclick = function (event) {
  if (event.target === manageCategoryModal) {
    manageCategoryModal.classList.add('hidden')
  }
}