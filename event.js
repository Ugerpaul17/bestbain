<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">calculate</button>

<script>
document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello World!");
});
</script>

</body>
</html>