/*
    Assignment 05
*/

$(document).ready(function () {
   
 class ContentItem{
    Id;
    Name;
    Descri;
    Category;

constructor(Id, Name, Descri, Category){
        this.Id = uniqueId;
        this.Name = name;
        this.Descri = description;
        this.Category = category;
        }

updateContentItem(uniqueId, name, description, category){
        if(this.Id == uniqueId && name && description && category){
            this.Id = uniqueId;
            this.Name = name;
         this.Descri = description;
            this.Category = category;
            }

        }
        toString(){
        return $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.Id}">
        <h4 class="name">${this.Name}</h4>
        <p class="description">${this.Descri}</p>
        <div class="category">${this.Category}</div>
        </div>
         </div>`);
            }
    }
    
    let content = [
    {
        "Id": 0,
        "Name": "Rishi Patel",
        "Descri": "Employee of Junction",
        "Category": "Employee"
    },
    {
        "Id": 1,
        "Name": "Shiv Patel",
        "Descri": "Owner of Junction",
        "Category": "Owner"
    },
    {
        "Id": 2,
        "Name": "Aditya Patel",
        "Descri": "Manager of Junction",
        "Category": "Manager"
    },
     {
        "Id": 3,
        "Name": "Het Patel",
        "Descri": "Manager of Junction",
        "Category": "Manager"
    },
    {
        "Id": 4,
        "Name": "Vishwas Patel",
        "Descri": "Employee of junction",
        "Category": "Employee"
    }
    ];
    $.each(content, function(key, val){
      $('#content-item-list').append(`<div class="content-item-wrapper">
     <div id="content-item-${this.Id}">
     <h4 class="name">${this.Name}</h4>
     <p class="description">${this.Descri}</p>
     <div class="category">${this.Category}</div>
    </div>
    </div>`);
    });
   $('h2').empty().text("About Stores");

});


