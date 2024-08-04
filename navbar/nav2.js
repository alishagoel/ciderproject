document.addEventListener("DOMContentLoaded", function() {
    var navbarHTML = `
    <div class="nav">
        <div class="navMenu">
            <div><a href="index.html">home</a></div>
            <div class="dropdown">
                <button class="drop">projects 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdownContent">
                    <a href="psych/pyschedelic.html">Psychedelic Experience</a>
                    <a href="redroom/red.html">The Red Room</a>
                    <a href="threads/redthreads.html">Threads</a>
                    <a href="teddyworld/teddyworld.html">Teddy's World</a>
                    <a href="madwoman/madwoman.html">Madwoman's Diary</a>
                    <a href="letters/letters.html">Letters</a>
                </div> 
            </div>
        </div>  
    </div>`;
    
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
});
