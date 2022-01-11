<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #B0E0E6;
  }
  article   {
  background-image: url('https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=');
  }
h1   {
  color: #000080;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-image: url('https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=');
  }
h2   {
  color: #0000FF;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center
  }
p    {
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  }
ul    {
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  }
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav a {
  float: left;
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
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown-content a:hover {background-color: #f1f1f1}
.show {display:block;}
</style>

</head>
<body>
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#contact">Contacts</a>
  <a href="#about">About me</a>
</div>
<ul><li>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Home</a>  
    <a href="#">About me</a>
    <a href="#">Contacts</a>
  </div>
</div>
</li>
</ul>
<script>
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
<article>
<h1>Sinenhlanhla Pearl Magubane</h1>
</article> 
<section>
<h2>About me</h2>
<p>As an aspiring web developer, I enjoys
challenging my self to always
improve in my professional life. I
take criticism as a way of guidance
and a chance to learn and correct
my mistakes. Outside the professional world I am
an adventurous person who enjoys camping and hiking.
I also like watching cartoons and doing yoga.</p>
</section>

<section>
<h2>Skills</h2>
<p><ul>
<li>JavaScript</li>
<li>Latex</li>
<li>Microsoft Package</li>
</ul>
</p></section>

<section>
<h2>Projects</h2>
<p>The projects that I have worked on can be found on my github page <a href="https://github.com/sne-hub">here</a></p> </section>

<section>
<h2>Contacts</h2>
<p><ul>
<li><a href="https://www.linkedin.com/in/sinenhlanhla-magubane-bb1190185?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWNOZU%2FqFTfmmeHWNRXl1eg%3D%3D">linkedIn</a></li> <li><a href="https://www.facebook.com/profile.php?id=100012419408320">Facebook</a></li></ul></p>
</section>
</body>
</html> 
