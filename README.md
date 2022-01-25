<html>

<head>
    <title>Sinenhlanhla's website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body {
            background-color: #B0E0E6;
        }
        header.page-header {
            background-image: url('https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=');
        }
        header.page-header>h1 {
            color: #000080;
            font-family: Arial, Helvetica, sans-serif;
            text-align: left;
        }
        h2 {
            color: #0000FF;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center
        }
        p {
            color: #000000;
            font-family: Arial, Helvetica, sans-serif;
        }
        ul {
            color: #000000;
            font-family: Arial, Helvetica, sans-serif;
        }
        .topnav {
            overflow: hidden;
            background-image: url('https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=');
        }
        .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }
        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }
        .topnav a.active {
            background-color: #04AA6D;
            color: white;
        }
        .topnav .icon {
            display: none;
        }
        @media screen and (min-width: 320px) {
            .topnav a:not(:first-child) {
                display: none;
            }
            .topnav a.icon {
                float: right;
                display: block;
            }
        }
        @media screen and (min-width: 320px) {
            .topnav.responsive {
                position: relative;
            }
            .topnav.responsive a.icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .topnav.responsive a {
                float: none;
                display: block;
                text-align: left;
            }
        }
    </style>
</head>

<body>
    <header class="page-header">
            <div class="topnav" id="myTopnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        <script>
            function myFunction() {
                let x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        </script>
        <h1>Sinenhlanhla Pearl Magubane</h1>
        <p> Web development Student</p>
    </header>
    <section>
        <h2>About me</h2>
        <p>As an aspiring web developer, I enjoy challenging myself to always improve in my professional life. I take criticism as a way of guidance and a chance to learn and correct my mistakes. Outside the professional world, I am an adventurous person who enjoys camping and hiking. I also like watching cartoons and doing yoga.</p>
    </section>
    <section>
        <h2>Skills</h2>
        <p>
        <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        </p>
    </section>
    <section>
        <h2>Projects</h2>
        <p>The projects that I have worked on can be found on my GITHUB page <a
                href="https://github.com/sne-hub">here</a></p>
    </section>
    <section>
        <h2>Contacts</h2>
        <p>
        <ul>
            <li><a
                    href="https://www.linkedin.com/in/sinenhlanhla-magubane-bb1190185?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWNOZU%2FqFTfmmeHWNRXl1eg%3D%3D">LinkedIn</a>
            </li>
            <li><a href="https://www.facebook.com/profile.php?id=100012419408320">FaceBook</a></li>
        </ul>
        </p>
    </section>
</body>

</html>