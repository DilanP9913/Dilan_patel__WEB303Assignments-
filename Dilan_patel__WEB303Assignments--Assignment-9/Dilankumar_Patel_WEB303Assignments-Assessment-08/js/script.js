$(document).ready(function ()
  {
  $.ajax({
    type: "GET",
    url: "array.json",
    data: { get_param: "value" },
    dataType: "json",
    complete: function (data)
      {
      Char = data;
    },
  });


  $(document).ajaxComplete(function () 
    {
    Char = $.parseJSON(Char.responseText);
    function SortOrder() {
      return function (x, y) 
      {
        if (x.name > y.name) 
        {
          return 1;
        }
          else if (x.name < y.name) 
          {
          return -1;
        }
        return 0;
      };
    }

    Char.sort(SortOrder());
    AtoM = Char.filter((item) => /^[a-m]/i.test(item["name"]));
    NtoZ = Char.filter((item) => /^[n-z]/i.test(item["name"]));
    
    table(Char);
    $("#A-M").text(`Filter A-M (${Object.keys(A-M).length})`);
    $("#N-Z").text(`Filter N-Z (${Object.keys(N-Z).length})`);
  });
});



$("#search").on("keyup", function ()
{
  const value = $(this).val().toLowerCase();
  if(value)
  {
      console.log("Value", value);
      $("#tb tr").filter(function ()
      {
        const $team = $(this)[0];
    
        if($team.firstElementChild.textContent.toLowerCase().indexOf(value) > -1)
        {
            console.log($team.firstElementChild.textContent);
            $($team).addClass("searched");
        } else {
            $($team).removeClass("searched");
        }
      });
    } 
    else 
    {
        $("#tb tr").removeClass("searched");
    }
});


function table(data) 
{
     // adding rows
     var rows = "";
     $.each(data, function (key, value) 
    {
       let row_name = `<tr>
             <td>${value.charactername}</td>  
             <td>${value.speciality}</td>  
             <td>${value.gender}</td>                
             <td>${value.character_creator}</td>  
             <td>${value.number_of_movie_appearence}</td>
             <td>${value.date_of_created}</td>  
         </tr>`;
       rows += row_name;
     });
 
     $("#tb").empty().append(rows);
}

$("button").on("click", function()
    {
    var id = $(this).attr("id");
    if(id == "A-M") {
        table(A-M)
    } 
    else if(id == "N-Z") 
    {
        table(N-Z)
    }
})

function sortTable(n)
 {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("Table");
  switching = true;
  dir = "asc";
  while (switching) 
  {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) 
    {
     
      shouldSwitch = false;
    
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (dir == "asc") 
      {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
        {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } 
      else if (dir == "desc") 
      {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
        {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch)
     {
  
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else 
    {
      if (switchcount == 0 && dir == "asc") 
      {
        dir = "desc";
        switching = true;
      }
    }
  }
}

/*
    Name: - Dilan Patel
    Date: - 24/11/2022
    Student ID: - 0775508
*/ 


