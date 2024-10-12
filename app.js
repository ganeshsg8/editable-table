'use strict'

let DATA = [
    {
        "id": 1,
        "chemicalName": "Ammonium persulfate",
        "vender": "LG Chem",
        "density": 3525.92,
        "viscosity": 60.63,
        "packaging": "Bag",
        "packSize": 100.00,
        "unit": "Kg",
        "quantity": 6495.18
    },
    {
        "id": 2,
        "chemicalName": "caustic potash",
        "vender": "formosa",
        "density": 3172.15,
        "viscosity": 48.22,
        "packaging": "Bag",
        "packSize": 100.00,
        "unit": "Kg",
        "quantity": 6495.18
    },
    {
        "id": 3,
        "chemicalName": "Dimethylaminopropylamino",
        "vender": "LG Chem",
        "density": 8435.37,
        "viscosity": 12.62,
        "packaging": "Barrel",
        "packSize": 75.00,
        "unit": "L",
        "quantity": 5964.61
    },
    {
        "id": 4,
        "chemicalName": "Mono Ammonium Phosphate",
        "vender": "Sinopec",
        "density": 1597.65,
        "viscosity": 76.51,
        "packaging": "Bag",
        "packSize": 105.00,
        "unit": "Kg",
        "quantity": 8183.61
    },
    {
        "id": 5,
        "chemicalName": "Ferric Nitrate",
        "vender": "DowDuPont",
        "density": 364.04,
        "viscosity": 14.90,
        "packaging": "Bag",
        "packSize": 105.00,
        "unit": "Kg",
        "quantity": 4154.33
    },
    {
        "id": 6,
        "chemicalName": "n-pentane",
        "vender": "Sinopec",
        "density": 4535.04,
        "viscosity": 66.76,
        "packaging": "N/A",
        "packSize": "N/A",
        "unit": "t",
        "quantity": 6272.34
    },
    {
        "id": 7,
        "chemicalName": "Sodium Bicarbonate",
        "vender": "DowDuPont",
        "density": 2200.00,
        "viscosity": 20.00,
        "packaging": "Bag",
        "packSize": 50.00,
        "unit": "Kg",
        "quantity": 3000.00
    },
    {
        "id": 8,
        "chemicalName": "Potassium Chloride",
        "vender": "Sinopec",
        "density": 1950.00,
        "viscosity": 25.00,
        "packaging": "Bag",
        "packSize": 100.00,
        "unit": "Kg",
        "quantity": 8000.00
    },
    {
        "id": 9,
        "chemicalName": "Sulfuric Acid",
        "vender": "Chemtrade",
        "density": 1840.00,
        "viscosity": 10.00,
        "packaging": "Drum",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 4500.00
    },
    {
        "id": 10,
        "chemicalName": "Hydrochloric Acid",
        "vender": "LG Chem",
        "density": 1200.00,
        "viscosity": 5.00,
        "packaging": "Drum",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 5000.00
    },
    {
        "id": 11,
        "chemicalName": "Acetic Acid",
        "vender": "SABIC",
        "density": 1040.00,
        "viscosity": 1.20,
        "packaging": "Container",
        "packSize": 1000.00,
        "unit": "L",
        "quantity": 4000.00
    },
    {
        "id": 12,
        "chemicalName": "Calcium Carbonate",
        "vender": "Omya",
        "density": 2700.00,
        "viscosity": 30.00,
        "packaging": "Bag",
        "packSize": 25.00,
        "unit": "Kg",
        "quantity": 6000.00
    },
    {
        "id": 13,
        "chemicalName": "Sodium Hydroxide",
        "vender": "LG Chem",
        "density": 1400.00,
        "viscosity": 15.00,
        "packaging": "Container",
        "packSize": 200.00,
        "unit": "L",
        "quantity": 3000.00
    },
    {
        "id": 14,
        "chemicalName": "Boric Acid",
        "vender": "Omya",
        "density": 1500.00,
        "viscosity": 12.00,
        "packaging": "Bag",
        "packSize": 50.00,
        "unit": "Kg",
        "quantity": 2500.00
    },
    {
        "id": 15,
        "chemicalName": "Urea",
        "vender": "Yara",
        "density": 1300.00,
        "viscosity": 10.00,
        "packaging": "Bag",
        "packSize": 50.00,
        "unit": "Kg",
        "quantity": 5000.00
    }
]

// const tableRows = document.getElementById("grid-table");
let SELECTEDROW = null;
let TEMPCOPYDATA = JSON.parse(JSON.stringify(DATA));
const GRIDTABLEROWS = document.querySelector('#grid-table-row');
const ARROWUPICON = document.getElementById("arrow-up-icon");
const ARROWDOWNICON = document.getElementById("arrow-down-icon");

function insertRow(d, i) {
    let divTxt = `<div class="table-container table-container-row ${d.isActive ? 'active' : ''}">
                <div class="${d.isActive ? 'fill-blue' : 'fill-grey'} icon-wrapper icon icon-clm table-cell table-row-cell" data-index="${i}" id="${d.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                        fill="currentColor">
                        <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                </div>
                <div class="id-clm table-row-cell table-cell">${d.id}</div>
                <div class="chemical-clm table-row-cell table-cell">${d.chemicalName}</div>
                <div class="vendor-clm table-row-cell table-cell">${d.vender}</div>
                <div class="density-clm table-row-cell table-cell"><input  class="input-box" data-id="${d.id}" data-key="density" type="number" value="${d.density}" /></div>
                <div class="viscosity-clm table-row-cell table-cell"><input class="input-box" data-id="${d.id}" data-key="viscosity"  type="number" value="${d.viscosity}"/></div>
                <div class="packaging-clm table-row-cell table-cell">${d.packaging}</div>
                <div class="pack-clm table-row-cell table-cell">${d.packSize}</div>
                <div class="unit-clm table-row-cell table-cell">${d.unit}</div>
                <div class="quantity-clm table-row-cell table-cell"><input class="input-box" data-id="${d.id}" type="number" data-key="quantity" value="${d.quantity}"/></div>
            </div>`;
    GRIDTABLEROWS.insertAdjacentHTML('beforeend', divTxt)
}
function createRows(rows) {
    let data = rows ? rows : DATA;
    data.forEach((d, i) => {
        insertRow(d, i)
    })

    const divs = document.querySelectorAll('.table-container-row > .icon-clm');
    divs.forEach(div => {
        div.addEventListener('click', function (event) {
            // inactive previous tick
            const blueTick = document.querySelector('.table-container-row > .fill-blue');
            if (blueTick) {
                blueTick.parentElement.classList.remove('active')
                blueTick.classList.remove('fill-blue');
                blueTick.classList.add('fill-grey');
            }
            // set current tick to active
            const targetDiv = event.currentTarget;
            targetDiv.classList.remove('fill-grey');
            targetDiv.classList.add('fill-blue');
            targetDiv.parentElement.classList.add('active');
            SELECTEDROW = {
                index: parseInt(targetDiv.getAttribute('data-index')),
                id: targetDiv.getAttribute('id')
            }
            // alert(currentRowSelected);
            // console.log('Clicked: ', selectedRow);
        });
    });
    const inpts = document.querySelectorAll('.input-box');
    // console.log("inpts",inpts);
    inpts.forEach(inpt => {
        // console.log('inpt',inpt);
        inpt.addEventListener('focusout', function (event) {
            event.preventDefault();
            let id = event.target.getAttribute('data-id');
            let key = event.target.getAttribute('data-key');
            let value = event.target.value;
            // console.log("id :%s , value : %s key : %s", id, value, key);
            let idx = TEMPCOPYDATA.findIndex(e => e.id == id);
            TEMPCOPYDATA[idx][key] = value
        })
    })
}

createRows();

let children = document.querySelector(".table-action-items").children;
for (let i = 0; i < children.length; i++) {
    switch (children[i].id) {
        case "arrow-down-icon":
            handleArrowDownClick(children[i])
            break;
        case "arrow-up-icon":
            handleArrowUpClick(children[i])
            break;
        case "add-icon":
            handleAddRowClick(children[i]);
            break;
        case "delete-icon":
            handleDelete(children[i])
            break;
        case "refresh-icon":
            handleRefreshClick(children[i])
            break;
        case "save-icon":
            handleSaveClick(children[i])
            break;
    }
}

function handleArrowDownClick(element) {
    element.addEventListener('click', function () {
        element.classList.add('fill-blue')
        ARROWUPICON.classList.remove('fill-blue');
        ARROWUPICON.classList.add('fill-grey')
        let row1 = document.getElementById(`${SELECTEDROW.id}`).parentElement;
        let row2 = document.getElementById(`${SELECTEDROW.id}`).parentElement.nextElementSibling;
        moveRow(row1, row2, 'next')

    })
}

function handleArrowUpClick(element) {
    element.addEventListener('click', function () {
        element.classList.add('fill-blue')
        ARROWDOWNICON.classList.remove('fill-blue');
        ARROWDOWNICON.classList.add('fill-grey')
        let row1 = document.getElementById(`${SELECTEDROW.id}`).parentElement;
        let row2 = document.getElementById(`${SELECTEDROW.id}`).parentElement.previousElementSibling
        moveRow(row2, row1, 'prev')
        // // if (row2 == null) {
        // //     return alert("already at Top")
        // // }
        // // row1.style.transform = 'translateY(-50px)';
        // // row2.style.transform = 'translateY(50px)';
        // // let index = TEMPCOPYDATA.findIndex(d => d.id == SELECTEDROW.id);

        // // let row1Data = TEMPCOPYDATA[index];
        // // row1Data.isActive = true;
        // // let row2Data = TEMPCOPYDATA[index - 1];
        // // TEMPCOPYDATA[index - 1] = row1Data;
        // // TEMPCOPYDATA[index] = row2Data;

        // // setTimeout(() => {
        // //     GRIDTABLEROWS.innerHTML = '';
        // //     createRows(TEMPCOPYDATA);
        // // }, 510)
    })
}

function moveRow(row1, row2, type) {
    if (row2 == null || row1 == null) {
        return alert("On its end");
    }
    row1.style.transform = 'translateY(50px)';
    row2.style.transform = 'translateY(-50px)';
    let index = TEMPCOPYDATA.findIndex(d => d.id == SELECTEDROW.id);
    let nextIdx = type == 'next' ? index + 1 : index - 1
    let row1Data = TEMPCOPYDATA[index];
    row1Data.isActive = true;
    let row2Data = TEMPCOPYDATA[nextIdx];
    TEMPCOPYDATA[nextIdx] = row1Data;
    TEMPCOPYDATA[index] = row2Data;

    setTimeout(() => {
        GRIDTABLEROWS.innerHTML = '';
        createRows(TEMPCOPYDATA);
    }, 510)

}

function handleDelete(element) {
    element.addEventListener('click', function () {
        if (SELECTEDROW !== null) {
            TEMPCOPYDATA[SELECTEDROW.index].deleted = true;
            document.getElementById(`${SELECTEDROW.id}`).parentElement.style.display = 'none';
        } else {
            alert("select atleast one row")
        }
    })
}

function handleRefreshClick(element) {
    element.addEventListener('click', function () {
        console.log('creating row again');
        GRIDTABLEROWS.innerHTML = '';
        TEMPCOPYDATA = JSON.parse(JSON.stringify(DATA));
        createRows()
    })
}

function handleSaveClick(element) {
    element.addEventListener('click', function () {
        TEMPCOPYDATA.forEach((data, i) => {
            if (data.deleted) {
                TEMPCOPYDATA.splice(i, 1);
            }
            delete data.isActive
        })
        DATA = JSON.parse(JSON.stringify(TEMPCOPYDATA));
    })

}
let MODEL = document.querySelector('#model');
function handleAddRowClick(element) {
    element.addEventListener('click', function (event) {
        MODEL.style.visibility = 'visible';
    })
}

document.getElementById('addRowForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let inpts = document.querySelectorAll('#addRowForm .inpt-text');
    let d = {};
    inpts.forEach(element => {
        d[element.id] = element.value;
    })
    let i = TEMPCOPYDATA.length;
    insertRow(d, i);
    TEMPCOPYDATA.push(d);
    MODEL.style.visibility = 'hidden';
    this.reset();
});

document.getElementById('cancelButton').addEventListener('click', function(event) {
    MODEL.style.visibility = 'hidden';
})