import React from 'react';

function SideMenu() {
  // This function scrolls the page to the section with padding for the navbar
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 80; // Height of the navbar

    if (section) {
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sideMenu">
      <ul>
        <li><a href="#work" onClick={(e) => { e.preventDefault(); handleScroll('work'); }}>Work Experience</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); handleScroll('education'); }}>Education</a></li>
        <li><a href="#leadership" onClick={(e) => { e.preventDefault(); handleScroll('leadership'); }}>Leadership Experience</a></li>
      </ul>
    </div>
  );
}

export default SideMenu;
