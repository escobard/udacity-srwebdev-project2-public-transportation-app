/* ===================================

	SW handle 

======================================*/
// when this is enabled, browserSync does not work

//does not register service worker if unsupported
if (!navigator.serviceWorker) {

 } 

    // registers SW
 else if('serviceWorker' in navigator) 
{
    console.log('SW registered!');
    
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
    });
}