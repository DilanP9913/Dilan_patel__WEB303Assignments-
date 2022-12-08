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

/*
    Name: - Dilan Patel
    Date: - 15/11/2022
    Student ID: - 0775508
*/ 