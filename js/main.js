var classList = [];
var nextID = 0;
var clickedStudent;

function Student (studentName){
  this.studentName = studentName;
  this.tardy = false;
  this.absent = false;
  this.studentID=++nextID;
}
function addStudent(){
  var newStudent = new Student($("#studentInput").val());
  classList.push(newStudent);
  $("#classList").append("<li value=\""+newStudent.studentID+"\">"+newStudent.studentName+"</li>");
  $('#studentInput').val('');
}
function markStudent(){
  clickedStudent = classList[$(this).val()-1];
  if(!clickedStudent.tardy){
    clickedStudent.tardy=true;
    $(this).toggleClass("tardy");
  }
  else if (clickedStudent.tardy) {
    clickedStudent.tardy=false;
    clickedStudent.absent=true;
    $(this).toggleClass("absent").toggleClass("tardy");
  }
  else{
    clickedStudent.tardy=false;
    clickedStudent.absent=false;
    $(this).removeClass("tardy").removeClass("absent");
  }
}
function showTardy(e){
  e.preventDefault();
  $.each(classList,function(index,value){
    if(value.tardy){
      $("#tardyList").append("<li>"+value.studentName+"</li>");
    }
  })
}
function showAbsent(e){
  e.preventDefault();
  $.each(classList,function(index,value){
    if(value.absent){
      $("#absentList").append("<li>"+value.studentName+"</li>");
    }
  })
}

$(document).ready(function(){
  $("#submitButton").on("click",function(e){
    e.preventDefault();
    addStudent();
  });
  $("#classList").on("click","li",markStudent);
  $("#tardyButton").on("click",function(e){showTardy(e);});
  $("#absentButton").on("click",function(e){showAbsent(e);});
});
