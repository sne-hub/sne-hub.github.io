<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #B0E0E6;
  }
h1   {
  color: #000080;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-image: url('abstract-geometric-banner-free-vector.jpg');
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
<ul><li>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">more</button>
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
    let dropdowns = document.getElementsByClassName("dropdown-content");
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
<h1>Sinenhlanhla Pearl Magubane</h1> 
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
