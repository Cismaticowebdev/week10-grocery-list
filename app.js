
const itemArray = []; //Array to store all items in the list

const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', addItem);

const btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener('click', deleteItem);

function addItem() {
    const itemInput = document.getElementById('itemInput'); // User input

    if (itemInput.value !== '') { // Check that user input is not empty
        itemArray.push(itemInput.value); // Store the input value in the array
        printItemArray(); // Print array to update the list
    }
}

function deleteItem() {
    const itemInput = document.getElementById('itemInput'); // User input

    if (itemInput.value !== '') { // Check that user input is not empty
        const index = itemArray.indexOf(itemInput.value); // Get index of the element the user want to delete from the list

        if (index !== -1) { // If the element is not present in the array, index will be -1
            itemArray.splice(index, 1);
            printItemArray(); // Print array to update the list
        }
    }
}


function printItemArray() {
    resetGroceryList();

    // Iterate through the array and print every item in it
    itemArray.forEach(item => {
        const groceryList = document.querySelector('ul');
        let listItem = document.createElement('li');

        listItem.textContent = item;
        listItem.classList.add('col-9');

        groceryList.appendChild(listItem);
    });
}

// Delete the content in the ul element
function resetGroceryList() {
    const groceryList = document.querySelector('ul');
    groceryList.textContent = '';
}