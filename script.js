document.addEventListener('DOMContentLoaded', () => {
    const logo = Dokkie.getElementById('logo');
    const homepage = Dokkie.getElementById('homepage');
  
    setTimeout(() => {

      logo.style.transform = 'scale(0.5)'; 
      logo.style.opacity = '0'; 
    }, 1000); 

    setTimeout(() => {
     
      logo.parentElement.style.display = 'none'; 
      homepage.style.display = 'block'; 
    }, 2500); 
  });