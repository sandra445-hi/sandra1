<html>
    <head>
        <script type="text/javascript">
            var n=("Enter the number to find odd or even","5");
            n=parseInt(n);
            if(isNaN(n))
            {
                alert("please enter the Number")
            }
            else if(n==0)
            {
                alert("The number is zero")
            }
            else if(n%2) // else if(=n/2=0)
            {
                alert("the number is odd")
            }
            else
            {
                alert("the number is even")
            }
        </script>
    </head>
</html>