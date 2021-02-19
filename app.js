document.addEventListener('click', function(event){
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
}, false);