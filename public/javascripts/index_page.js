window.onload = function() {
    document.body.className += " loaded";
    if (window.innerWidth >= 680) {
        document.getElementById('second').className += ' fadeInLeft';
        document.getElementById('third-red').className += ' slideInLeft';
        document.getElementById('balloon-image').className += ' slideInRight';
        document.getElementById('fimage-block').className += ' slideInLeft';
        document.getElementById('fmap-block').className += ' slideInRight';
    }
}

function addClass(o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}