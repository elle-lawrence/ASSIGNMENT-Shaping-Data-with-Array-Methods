// import { businesses } from "./data"
const businessesArray = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const listTitle = (textToPrint) => {
    renderToDom("#output", textToPrint)
}

const radioBtn = () => {
    const domString = `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">All Businesses</label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">Manufacturers</label>
        </div> 
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2">
        <label class="form-check-label" for="exampleRadios2">Purchasing Agents</label>
        </div> 
        `

    renderToDom("#radioBtn", domString)
    }

const activeBusinesses = (array, divId) => {
        let totalOrders = array.orders.reduce(
            (previousValue, nextValue,) => {
                previousValue += nextValue,
            0
            })
        let businessInfo = '';
    array.forEach((businessObj) => {
        
        businessInfo += 
            `<h2>
                ${businessObj.companyName}
                ($${totalOrders})
            </h2>
            <section>
                ${businessObj.addressFullStreet}
            </section>
            <section>
                ${businessObj.addressCity} ${businessObj.addressStateCode}, ${businessObj.addressZipCode}
            </section>
            <hr>`
    });
    renderToDom(divId, businessInfo);
} 


businessesArray.sort((a, b) => {
    if (a.companyName < b.companyName) {
        return -1;
    }
    if (a.companyName > b.companyName) {
        return 1;
    }
        return 0;
  });

const searchBar = document.querySelector('#searchbar');


searchBar.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredBusArr = businessesArray.filter( obj => {
        return obj.companyName.toLowerCase().includes(searchString) ||
        obj.addressStateCode.toLowerCase().includes(searchString) ||
        obj.purchasingAgent.nameFirst.toLowerCase().includes(searchString);
    })
    activeBusinesses(filteredBusArr, "#businessList")       
    });

const radioBtnClick =(event) => {
    if (event.target.id === "exampleRadios1") {
        activeBusinesses(businessesArray, "#businessList")
        listTitle(`<h1>Active Businesses</h1>`)
    }
    if (event.target.id === "exampleRadios2") {
        const manuArray = businessesArray.filter( obj => {
            return obj.companyIndustry === "Manufacturing"
        });   
        activeBusinesses(manuArray, "#businessList")
        listTitle(`<h1>Manufacturing Businesses</h1>`)      
    }
    if (event.target.id === "exampleRadios3") {
        let domString = ""
        const purAgentArray = businessesArray.map(business => (
            {
                "purchasingAgent": business.purchasingAgent,
                "company": business.companyName,
                "phoneNumber": business.phoneWork
            }
        ))
        purAgentArray.forEach(agent => {
            domString += `
            <h2>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
            <h6>${agent.company}</h6>
            <h6>${agent.phoneNumber}</h6>`
            domString += "<hr/>"
        })
        renderToDom("#businessList", domString)
        listTitle(`<h1>Purchasing Agents</h1>`)
    }
}    

const radioBtnEvent = () => {
    document.querySelector("#radioBtn").addEventListener("click", radioBtnClick)
}

// searchBar.addEventListener("keyup", (event) => {
//     const searchString = event.target.value.toLowerCase();
//     let searchBus = (businessesArray, value) => {
//     return businessesArray.find(obj => obj.companyName.toLowerCase().includes(searchString))
//     }
//     console.warn(searchBus(businessesArray, searchString))
//     // activeBusinesses(searchBus, "#businessList")
// })

const init = () => {
    radioBtn();
    radioBtnEvent();
    listTitle(`<h1>Active Businesses</h1>`)
    activeBusinesses(businessesArray, "#businessList");
}

init();