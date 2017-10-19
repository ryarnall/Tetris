var square = (
  $('<div/>')
    .attr("id", "square")
    .addClass("shape")
);

$("button").click(function() {
  $("#playingField").append(square);
});
