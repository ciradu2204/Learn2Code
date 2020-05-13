<!DOCTYPE html>
<html>

<head>
    <title>Learn2Code</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <?php
        // this helps define variables and set it to empty
        $name = $email = $message= $response="";
        // the post method helps to collect form data after submitting
        // so if the request method is post, it should use the test_input to validate each data
        if($_SERVER["REQUEST_METHOD"] == "POST"){
          $name= test_input($_POST["name"]); // this is the name variable which has the test_input to validate and then stores the name from the form
          $email= test_input($_POST["email"]);
          $message= test_input($_POST["message"]);
          $gender= test_input($_POST["gender"]);
          $response= ", Thank you for your enqiry, you will be contacted within three working days"; // the response variable stores the message that will be echoed when a user submit   
        }
        // the test_input function helps to validate all the data by removing space(trimming),
        // removes slashes(stripcslashes),and removes harmful html codes on a website(htmlSpecialChar)
        function test_input($data){
            $data= trim($data);
            $data = stripcslashes($data);
            $data = htmlspecialchars($data);
            return $data; 
        }
        
    ?>

    <div id="container">

        <!-- page content -->
        <div id="part1">
            <!-- header -->
            <header id="header">
                <div id="logo" class="col">
                    <img src="./Images/logo1.png" alt="logo">
                </div>

                <div id="search" class="col">
                    <input type="text" placeholder="eg: HTML Quiz 1">
                    <i class="fa fa-search"></i>

                </div>
            </header>
            <nav>
                <div class="navbar">
                    <a href="#header">Home</a>
                    <a href="#SlideShowContainer">About us</a>
                    <a href="Html/quiz.html">Quiz</a>
                    <a href="#formContiner">Contact us</a>
                </div>
            </nav>


            <hr class="style-four">
            <!-- slideshow -->
            <!-- w3School https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto -->
            <div id="slideShowContainer">
                <div class="mySlides fade">
                    <img class="slidesImg" src="Images/Learn2Code1.jpg" alt="Learn2Code1">
                    <div class="text">
                        <p>Learn2Code is a coding group initiated by the African
                            Leadership College students to help first year student learn programming languages easly and
                            faster through providing various coding quizzes</p>
                    </div>
                </div>
                <div class="mySlides fade">
                    <img class="slidesImg" src="Images/Learn2code4.jpg" alt="Learn2Code2">
                    <div class="text">
                        <p>SignUp to get an email notification everytime we post a new quiz of your prefered programming
                            language choice. Feel free to contact us
                            if you need any advice or want to give feedback.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Quiz section -->

            <div>
                <a class="quizButton" href="html/quiz.html">
                    <p>Take Quiz</p>
                </a>
            </div>

            <div class="typeQuiz">
                <h1>Learn2Code quizes are based on different languages</h1>
                <div class="content">
                    <img src="Images/Html5.png" alt="HTML5">
                    <img src="Images/css3.png" alt="CSS3">
                    <img src="Images/JavaScript.png" alt="JavaScript">
                </div>

            </div>

            <footer>
                <div class="socialMedia">
                    <p><i class="fa fa-youtube" style="font-size: 25px;"></i>Engage with us on Youtube</p>
                    <p><i class="fa fa-facebook-f" style="font-size: 25px;"></i>Engage with us on Facebook</p>
                    <p><i class="fa fa-twitter" style="font-size: 25px;"></i>Engage with us on Twitter</p>
                </div>
                <div class="address">
                    <ul>
                        <li><strong>Address</strong></li>
                        <li>Location:Rwanda, Kimironko</li>
                        <li>Telephone:+250785971983</li>
                        <li>Email:Learn2Code.com</li>
                    </ul>

                    <ul>
                        <li><strong>Quiz</strong></li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>javaScript</li>
                    </ul>

                    <ul>
                        <li><strong>Quick links</strong></li>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#SlideShowContainer">About us</a></li>
                        <li><a href="/Html/quiz.html">Quiz</a></li>
                        <li><a href="#formContiner">Contact us</a></li>
                    </ul>


                </div>
        
                  <p class="copyright">&copy; Copyright 2020 <span>www.Learn2Code.com</span></p>

            </footer>
        </div>

        <!-- side bar -->
        <div id="sideBar">

            <div id="userIcon">
            <i class="fa fa-user-circle"></i>
            </div>

            <div class="button">
                <input id="loginButton" type="button" value="Login">
                <input id="signUpButton" type="button" value="SignUp">
            </div>

            <div id="formContainer">
                <h1>Contact us</h1>
                <!--  prints the message when the user have submitted the form -->
                <span class="msg"><?php echo $name.$response;?></span>
                <p>We'd love to hear from you!!</p>
                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                    <label>Name:</label><br>
                    <input type="text" Name="name" value="">
                    <br><br>
                    <label>Email:</label><br>
                    <input type="text" name="email" value="">
                    <br><br>
                    <label>Message:</label><br>
                    <textarea name="message"></textarea>
                    <br><br>
                    <p class="gender">Gender:</p>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label><br>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label><br>
                    <input type="radio" id="other" name="gender" value="other">
                     <label for="other">Other</label>
                    <br><br>
                     
                    <input class="submit" type="submit">
                    
                </form>

            </div>
        </div>

    </div>


    <script src="index.js">
</script>

</body>

</html>