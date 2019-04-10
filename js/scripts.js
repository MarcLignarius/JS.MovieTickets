// Business Logic for TicketPrice ----------------------------------------------
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age,
  this.ticket = 8
}

Ticket.prototype.getTicketPrice = function () {
  if(this.movie === "Dumb and Dumber"){
    this.ticket += 2;
  } else if(this.movie === "This Is Spinal Tap"){
    this.ticket += 0;
  } else if(this.movie === "Rounders"){
      this.ticket += 0;
  }
  if(this.time === "12pm"){
    this.ticket -= 2;
  } else if (this.time === "4:30pm") {
    this.ticket += 0;
  } else if (this.time === "9:00pm") {
    this.ticket += 2;
  }
  if (this.age === "child") {
    this.ticket += 0;
  } else if (this.age === "adult") {
    this.ticket += 2;
  } else if (this.age === "senior") {
    this.ticket -= 2;
  }
};

// User Interface Logic --------------------------------------------------------
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var movie = $("#movie-select").val();
    var time = $("#time-select").val();
    var age = $("#age-select").val();
    var ticket = new Ticket(movie, time, age);
    ticket.getTicketPrice();
    var ticketArray = (Object.values(ticket));
    $(".movietitle").text(ticketArray[0]);
    $(".movietime").text(ticketArray[1]);
    $(".tickettype").text(ticketArray[2]);
    $(".ticketprice").text(ticketArray[3]);
    $("#output").show();
  });
});
