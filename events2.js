< !DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript HTML DOM</h2>

            <p>Hello World!</p>

            <p>Hello Norway!</p>

            <p>Click the button to change the color of all p elements.</p>

            <button onclick="myFunction()">Try it</button>

            <script>
                function myFunction() {
    var myCollection = document.getElementsByTagName("p");
                var i;
    for (i = 0; i < myCollection.length; i++) {
                    myCollection[i].style.color = "red";
                }
            }
</script>

        </body>
    </html>
